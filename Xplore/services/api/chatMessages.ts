import {
  COLLECTION_ID_MESSAGES,
  COLLECTION_ID_GROUP_CHATS,
  COLLECTION_ID_DIRECT_CHATS,
  COLLECTION_ID_USERS,
} from "@env";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import api from "../appwrite/api";

const getUserInfo = async (contactID: any) => {
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
  return data[0];
};

const getMessages = async (chatID: any) => {
  const response = await api.listDocuments(COLLECTION_ID_MESSAGES, [
    Query.equal("chatID", chatID),
  ]);
  const messages = await Promise.all(
    response?.documents?.map(async (doc: any) => {
      const createdAt = new Date(doc.$createdAt);
      const sender = await getUserInfo(doc.userID);
      return {
        id: doc.$id,
        chatID: doc.chatID,
        userID: doc.userID,
        message: doc.message,
        createdAt: createdAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: doc.$updatedAt.slice(0, 10),
        avatar: sender?.avatar,
        username: sender?.username,
      };
    })
  );
  return messages;
};

const useListMessages = (chatID: any) => {
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const fetchedMessages = await getMessages(chatID);
        const groupedMessages = await groupMessagesByDate(fetchedMessages);
        setMessages(groupedMessages);
      } catch (e) {
        console.log(e);
      }
    }, 500);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [chatID]);

  const groupMessagesByDate = async (msgs: any) => {
    const groupByDate = msgs.reduce((group: any, message: any) => {
      const { date, ...rest } = message;
      group[date] = group[date] ?? [];
      group[date].push(rest);
      return group;
    }, {});
    const messagesByDate = Object.keys(groupByDate).map((date) => {
      return {
        title: date,
        data: groupByDate[date],
      };
    });
    messagesByDate.sort((a, b) => b.title.localeCompare(a.title));
    messagesByDate.forEach((group) => {
      group.data.reverse();
    });
    return messagesByDate;
  };
  return messages;
};

const updateLastMessage = async (
  collectionId: any,
  msgData: any,
  chatID: any,
  usrId: any
) => {
  const response = await api.listDocuments(collectionId, [
    Query.equal("chatID", chatID),
  ]);
  if (collectionId === COLLECTION_ID_GROUP_CHATS) {
    response?.documents?.map((doc: any) => {
      api.updateDocument(collectionId, doc.$id, {
        userID: doc.userID,
        chatName: doc.chatName,
        chatID: chatID,
        lastMessage: msgData.message,
        lastModifiedAt: new Date().toISOString(),
        seen: doc.userID === usrId ? true : false,
      });
    });
  } else {
    response?.documents?.map((doc: any) => {
      api.updateDocument(collectionId, doc.$id, {
        userID: doc.userID,
        contactID: doc.contactID,
        chatID: chatID,
        lastMessage: msgData.message,
        lastModifiedAt: new Date().toISOString(),
        seen: doc.userID === usrId ? true : false,
      });
    });
  }
};

const createMessage = async (
  msgData: any,
  chatType: any,
  chatID: any,
  usrId: any
) => {
  const create = async () => {
    try {
      await api.createDocument(COLLECTION_ID_MESSAGES, msgData);
      if (chatType === "group") {
        await updateLastMessage(
          COLLECTION_ID_GROUP_CHATS,
          msgData,
          chatID,
          usrId
        );
      } else {
        await updateLastMessage(
          COLLECTION_ID_DIRECT_CHATS,
          msgData,
          chatID,
          usrId
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  create();
};

export { useListMessages, createMessage };
