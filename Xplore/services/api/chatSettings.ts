import {
  COLLECTION_ID_GROUP_CHATS,
  COLLECTION_ID_DIRECT_CHATS,
  COLLECTION_ID_MESSAGES,
} from "@env";
import { Query } from "appwrite";
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

export { changeChatName, deleteMessages };
