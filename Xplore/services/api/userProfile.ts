import { useQuery } from "react-query";
import { COLLECTION_ID_USERS } from "@env";
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

export { useFetchUserDetails };
