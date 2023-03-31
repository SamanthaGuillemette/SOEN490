/*
where all the various services related to the user profile.
Such services might include "getProfileById", and other related functions
*/
import { COLLECTION_ID_USERS } from "@env";
import api from "../appwrite/api";
import { useInfiniteQuery } from "react-query";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks";

const useListUsersPaginated = () => {
  const LIMIT = 15;
  return useInfiniteQuery({
    queryKey: "potentialProjectMembers",
    queryFn: async ({ pageParam = 0 }) => {
      const res = await api.listDocuments(COLLECTION_ID_USERS, [
        api.query.offset(LIMIT * pageParam),
        api.query.limit(LIMIT),
      ]);
      return {
        projects: res.documents,
        nextOffset: ++pageParam,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    retry: 2,
  });
};

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

export { useFetchUserDetails, useListUsersPaginated };
