import api from "../../services/appwrite/api";
import { useQuery } from "react-query";
import { Query } from "appwrite";
import { COLLECTION_ID_USERS } from "@env";

const updateInterests = async (userId: any, interests: any) => {
  try {
    const response = await api.listDocuments(COLLECTION_ID_USERS, [
      Query.equal("userID", userId),
    ]);
    response?.documents?.map((doc: any) => {
      api.updateDocument(COLLECTION_ID_USERS, doc.$id, {
        userID: doc.userID,
        interests: interests,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export { updateInterests };