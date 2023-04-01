import { useQuery } from "react-query";
import { COLLECTION_ID_USERS } from "@env";
import { useAuth } from "../../../hooks";
import api from "../../../services/appwrite/api";
import { Query } from "appwrite";

const getUserInfo = async (userID: string) => {
  const response = await api.listDocuments(COLLECTION_ID_USERS, [
    Query.equal("userID", userID),
  ]);
  return response?.documents[0];
};

export const useFetchUserDetails = () => {
  const { accountToken } = useAuth();
  const { data, status } = useQuery("user", () =>
    getUserInfo(accountToken?.$id!)
  );
  return { data, status };
};
