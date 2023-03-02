import { useQuery } from "react-query";
import { PROJECT_COLLECTION_ID, USER_COLLECTION_ID } from "@env";
import api from "../appwrite/api";
import { useAuth } from "../../hooks";

const useFetchUserDetails = () => {
  const { accountToken } = useAuth();
  return useQuery({
    queryKey: ["userDetails", accountToken!.$id],
    queryFn: () =>
      api.listDocuments(USER_COLLECTION_ID, [
        api.query.equal("userID", accountToken!.$id),
      ]),
  });
};

const useFetchUserProjects = (projectIDs: string[]) =>
  useQuery({
    queryKey: ["userProjects", projectIDs],
    queryFn: () =>
      api.listDocuments(PROJECT_COLLECTION_ID, [
        api.query.equal("$id", [...projectIDs]),
      ]),
  });

export { useFetchUserDetails, useFetchUserProjects };
