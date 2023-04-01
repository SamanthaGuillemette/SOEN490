import { BUCKET_PROFILE_PIC } from "@env";
import { useQuery } from "react-query";
import api from "../../../services/appwrite/api";

export const useFetchProfilePicture = (profilePictureId: string) => {
  const { data: profilePicture } = useQuery(
    "profile picture",
    () =>
      api.getFilePreview(
        BUCKET_PROFILE_PIC,
        profilePictureId ?? "642349fae9ecff15d018"
      ),
    {
      // This query will only run if "profilePictureId" is valid
      enabled: !!profilePictureId,
    }
  );

  return profilePicture;
};
