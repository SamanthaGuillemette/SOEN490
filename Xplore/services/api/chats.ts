import {
  COLLECTION_ID_GROUP_CHATS,
  COLLECTION_ID_DIRECT_CHATS,
  COLLECTION_ID_USERS,
} from "@env";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { createGroupAddNotif } from "./notifications";
import api from "../appwrite/api";

interface Chat {
  chatIndex: string;
  chatID: any;
  userID: any;
  contactID?: any;
  chatType: string;
  chatName?: any;
  lastMessage: any;
  seen: any;
  lastModifiedAt: string;
}

function generateRandomChatID() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 20; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

const getContactInfo = async (contactID: any) => {
  const response = await api.listDocuments(COLLECTION_ID_USERS, [
    Query.equal("userID", contactID),
  ]);
  const data = await Promise.all(
    response?.documents?.map(async (doc) => ({
      id: doc.userID,
      username: doc.username,
      avatar: doc.profilePicture,
      xp: doc.xp,
    }))
  );
  return data;
};

const createNewChat = async (chatData: any) => {
  const chatID = generateRandomChatID();
  await api.createDocument(COLLECTION_ID_DIRECT_CHATS, {
    userID: chatData.userID,
    contactID: chatData.contactID,
    chatID,
    seen: true,
    lastModifiedAt: new Date().toISOString(),
  });
  await api.createDocument(COLLECTION_ID_DIRECT_CHATS, {
    userID: chatData.contactID,
    contactID: chatData.userID,
    chatID,
    seen: false,
    lastModifiedAt: new Date().toISOString(),
  });
};

const createNewGroupChat = async (chatData: any) => {
  const chatID = generateRandomChatID();
  for (const userID of chatData) {
    await api.createDocument(COLLECTION_ID_GROUP_CHATS, {
      userID,
      chatID,
      chatName: "My Group Chat",
      seen: false,
      lastModifiedAt: new Date().toISOString(),
    });
    createGroupAddNotif(userID, chatID, "My Group Chat");
  }
};

const getChats = async (collectionId: any, userId: any) => {
  const response = await api.listDocuments(collectionId, [
    Query.equal("userID", userId),
  ]);

  const chats = await Promise.all(
    response?.documents?.map(async (doc) => {
      let contactInfo: any = null;
      if (collectionId === COLLECTION_ID_DIRECT_CHATS) {
        contactInfo = await getContactInfo(doc.contactID);
      }
      return {
        chatIndex: doc.$id,
        chatID: doc.chatID,
        userID: doc.userID,
        chatType:
          collectionId === COLLECTION_ID_DIRECT_CHATS ? "direct" : "group",
        chatName:
          collectionId === COLLECTION_ID_GROUP_CHATS
            ? doc.chatName
            : contactInfo && contactInfo[0]?.username,
        contactAvatar: contactInfo && contactInfo[0]?.avatar,
        lastMessage: doc.lastMessage,
        seen: doc.seen,
        lastModifiedAt: doc.lastModifiedAt,
      };
    })
  );

  const filteredChats = chats.filter(
    (chat) =>
      chat.chatType === "group" ||
      (chat.chatType === "direct" && chat.lastMessage !== "Start chatting!")
  );

  return filteredChats;
};

const useListChats = (userId: any) => {
  const isFocused = useIsFocused();
  const [chats, setChats] = useState<Chat[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) {
          const directChats = await getChats(
            COLLECTION_ID_DIRECT_CHATS,
            userId
          );
          const groupChats = await getChats(COLLECTION_ID_GROUP_CHATS, userId);
          const allChats = directChats.concat(groupChats) as Chat[]; // Type assertion here
          allChats.sort(
            (chat1: any, chat2: any) =>
              new Date(chat2.lastModifiedAt).getTime() -
              new Date(chat1.lastModifiedAt).getTime()
          );
          setChats(allChats);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isFocused, userId]);
  return chats;
};

const markAsSeen = async (chatType: string, chatID: any, userId: any) => {
  const collectionId =
    chatType === "direct"
      ? COLLECTION_ID_DIRECT_CHATS
      : COLLECTION_ID_GROUP_CHATS;
  const response = await api.listDocuments(collectionId, [
    Query.equal("chatID", chatID),
    Query.equal("userID", userId),
  ]);
  response?.documents?.map((doc: any) => {
    const updateData = {
      chatID,
      userID: doc.userID,
      contactID: doc.contactID,
      chatName: doc.chatName,
      lastMessage: doc.message,
      lastModifiedAt: doc.lastModifiedAt,
      seen: true,
    };
    api.updateDocument(collectionId, doc.$id, updateData);
  });
};

export {
  useListChats,
  createNewChat,
  createNewGroupChat,
  generateRandomChatID,
  markAsSeen,
  getContactInfo,
};
