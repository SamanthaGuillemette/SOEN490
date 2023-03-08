import { useQuery } from "react-query";
import { USER_COLLECTION_ID, PROFILE_PICTURES_BUCKET_ID } from "@env";
import api from "../appwrite/api";
import { useAuth } from "../../hooks";

const useFetchUserDetails = () => {
  const { accountToken } = useAuth();
  return useQuery({
    queryKey: ["userDetails", accountToken?.$id],
    queryFn: () =>
      api.listDocuments(USER_COLLECTION_ID, [
        api.query.equal("userID", accountToken!.$id),
      ]),
  });
};

const useUploadProfilePicture = async (
  bucketId: string,
  profilePicture: any
) => {
  return useQuery({
    queryKey: ["profilePictureURL", profilePicture],
    queryFn: () => api.uploadImage(PROFILE_PICTURES_BUCKET_ID, profilePicture),
  });
};

export { useFetchUserDetails };
