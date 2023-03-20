import {
  COLLECTION_ID_GROUP_CHATS,
  COLLECTION_ID_DIRECT_CHATS,
  COLLECTION_ID_MESSAGES,
  COLLECTION_ID_USERS,
} from "@env";
import { Query } from "appwrite";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "react-query";
import { useListUsers } from "./search";
import api from "../appwrite/api";

const updateLastMessage = async (chatID: any, chatType: any) => {
  const collectionId =
    chatType === "group"
      ? COLLECTION_ID_GROUP_CHATS
      : COLLECTION_ID_DIRECT_CHATS;
  const response = await api.listDocuments(collectionId, [
    Query.equal("chatID", chatID),
  ]);
  const updateData = {
    chatID: chatID,
    lastMessage: "Start chatting!",
  };
  if (chatType === "direct") {
    response?.documents.forEach((doc: any) => {
      api.updateDocument(COLLECTION_ID_DIRECT_CHATS, doc.$id, {
        ...updateData,
        userID: doc.userID,
        contactID: doc.contactID,
      });
    });
  } else {
    response?.documents.forEach((doc: any) => {
      api.updateDocument(COLLECTION_ID_GROUP_CHATS, doc.$id, {
        ...updateData,
        chatName: doc.chatName,
        userID: doc.userID,
      });
    });
  }
};

const deleteMessages = async (chatID: any, chatType: any) => {
  const response = await api.listDocuments(COLLECTION_ID_MESSAGES, [
    Query.equal("chatID", chatID),
  ]);
  response?.documents.forEach((doc: any) => {
    api.deleteDocument(COLLECTION_ID_MESSAGES, doc.$id);
  });
  await updateLastMessage(chatID, chatType);
};

const changeChatName = async (nameData: any, chatID: any) => {
  try {
    const response = await api.listDocuments(COLLECTION_ID_GROUP_CHATS, [
      Query.equal("chatID", chatID),
    ]);
    response?.documents?.map((doc: any) => {
      api.updateDocument(COLLECTION_ID_GROUP_CHATS, doc.$id, {
        chatID: chatID,
        chatName: nameData.chatName,
        userID: doc.userID,
        lastMessage: doc.message,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

const useListAvatars = (chatID: any, chatType: any) => {
  const [avatars, setAvatars] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const collectionId =
          chatType === "group"
            ? COLLECTION_ID_GROUP_CHATS
            : COLLECTION_ID_DIRECT_CHATS;

        const response = await api.listDocuments(collectionId, [
          Query.equal("chatID", chatID),
        ]);
        const avatarPromises = response?.documents.map(async (doc: any) => {
          const userID = doc.userID;
          const userResponse = await api.listDocuments(COLLECTION_ID_USERS, [
            Query.equal("userID", userID),
          ]);
          const username = userResponse?.documents[0]?.username || "";
          const avatar = userResponse?.documents[0]?.profilePicture || "";
          return { userID, username, avatar };
        });
        const avatarResults = await Promise.all(avatarPromises);
        const avatarsObject = avatarResults.reduce(
          (obj: any, item: any) => ({
            ...obj,
            [item.userID]: { username: item.username, avatar: item.avatar },
          }),
          {}
        );
        setAvatars(avatarsObject);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAvatars();
  }, [chatID, chatType]);

  return avatars;
};

const useListChatUsers = (chatID: any, areMembers: boolean) => {
  const isFocused = useIsFocused();
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  const userId = userdata?.$id as string;
  const [users, setUsers] = useState<any[]>([]);
  const userList = useListUsers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) {
          const chatUsersResponse = await api.listDocuments(
            COLLECTION_ID_GROUP_CHATS,
            [Query.equal("chatID", chatID)]
          );
          const chatUserIDs =
            chatUsersResponse?.documents?.map((doc: any) => doc.userID) || [];
          if (areMembers) {
            setUsers(
              userList.filter((user: any) => chatUserIDs.includes(user?.id))
            );
          } else {
            setUsers(
              userList.filter((user: any) => !chatUserIDs.includes(user?.id))
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [isFocused, userId, chatID, userList, areMembers]);

  return users;
};

const addToChat = async (chatData: any, chatID: any) => {
  for (const userID of chatData) {
    await api.createDocument(COLLECTION_ID_GROUP_CHATS, {
      userID,
      chatID,
      chatName: "My Group Chat",
      seen: false,
      lastModifiedAt: new Date().toISOString(),
    });
  }
};

export {
  changeChatName,
  deleteMessages,
  useListAvatars,
  useListChatUsers,
  addToChat,
};
