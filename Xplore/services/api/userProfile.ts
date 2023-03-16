import { useQuery } from "react-query";
import { COLLECTION_ID_USERS, PROFILE_PICTURES_BUCKET_ID } from "@env";
import api from "../appwrite/api";
import { useAuth } from "../../hooks";

const useFetchUserDetails = () => {
  const { accountToken } = useAuth();
  return useQuery({
    queryKey: ["userDetails", accountToken?.$id],
    queryFn: () =>
      api.listDocuments(COLLECTION_ID_USERS, [
        api.query.equal("userID", accountToken!.$id),
      ]),
  });
};

const useUploadProfilePicture = async (profilePicture: any) => {
  return useQuery({
    queryKey: ["profilePicture", profilePicture],
    queryFn: () => api.uploadImage(PROFILE_PICTURES_BUCKET_ID, profilePicture),
  });
};

export { useFetchUserDetails, useUploadProfilePicture };
