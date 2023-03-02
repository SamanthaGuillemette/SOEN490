import { COLLECTION_ID_GROUP_CHATS, COLLECTION_ID_DIRECT_CHATS } from "@env";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
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
  updatedAt: string;
}

const getChats = async (collectionId: any, userId: any) => {
  const response = await api.listDocuments(collectionId, [
    Query.equal("userID", userId),
  ]);
  return response?.documents?.map((doc) => ({
    chatIndex: doc.$id,
    chatID: doc.chatID,
    userID: doc.userID,
    contactID: doc.contactID,
    chatType: collectionId === COLLECTION_ID_DIRECT_CHATS ? "direct" : "group",
    chatName: collectionId === COLLECTION_ID_GROUP_CHATS ? doc.chatName : null,
    lastMessage: doc.lastMessage,
    seen: doc.seen,
    updatedAt: doc.$updatedAt,
  }));
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
          const allChats = directChats.concat(groupChats);
          allChats.sort(
            (chat1: any, chat2: any) =>
              new Date(chat2.updatedAt).getTime() -
              new Date(chat1.updatedAt).getTime()
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
      seen: true,
    };
    api.updateDocument(collectionId, doc.$id, updateData);
  });
};

export { useListChats, markAsSeen };
