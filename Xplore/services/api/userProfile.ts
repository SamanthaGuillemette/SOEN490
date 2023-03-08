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

const useUploadProfilePicture = async (profilePicture: any) => {
  const res = await api.storage.createFile(
    PROFILE_PICTURES_BUCKET_ID,
    api.ID.unique(),
    profilePicture
  );
  return useQuery({
    queryKey: ["profilePictureURL", res.$id],
    queryFn: () =>
      api.storage.getFilePreview(PROFILE_PICTURES_BUCKET_ID, res.$id),
  });
};

export { useFetchUserDetails };
