/*
where all the various services related to the user profile.
Such services might include "getProfileById", and other related functions
*/
import { COLLECTION_ID_USERS } from "@env";
import api from "../appwrite/api";
import { useInfiniteQuery } from "react-query";

const useListUsersPaginated = () => {
  const LIMIT = 5;
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

export { useListUsersPaginated };
