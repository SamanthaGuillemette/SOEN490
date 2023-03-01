import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
  useQuery,
} from "react-query";
import { USER_COLLECTION_ID } from "@env";
import api from "../appwrite/api";

const useFetchUserDetails = async () => {
  const userId = (await api.getAccount()).$id;
  return useQuery({
    queryKey: ["userDetails", userId],
    queryFn: () =>
      api.getDocument(USER_COLLECTION_ID, api.query.equal("userId", userId)),
  });
};
