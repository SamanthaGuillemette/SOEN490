import { COLLECTION_ID_USERS } from "@env";
import { Query } from "appwrite";
import api from "../../../services/appwrite/api";

const getUserInfo = async (userID: string) => {
  const response = await api.listDocuments(COLLECTION_ID_USERS, [
    Query.equal("userID", userID),
  ]);
  return response?.documents[0];
};

export { getUserInfo };
