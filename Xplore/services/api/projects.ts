//removed useQuery import for the time being
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
  useQuery,
} from "react-query";
import { COLLECTION_ID_PROJECT } from "@env";
import api from "../appwrite/api";
import { useEffect, useState } from "react";

//to be defined
interface Project {}

const useNewProjects = () => {
  const LIMIT = 5;
  return useQuery({
    queryKey: ["newProjects"],
    queryFn: () =>
      api.listDocuments(COLLECTION_ID_PROJECT, [
        api.query.limit(LIMIT),
        api.query.orderAsc("startDate"),
      ]),
  });
};

const useListProjectsPaginated = () => {
  const LIMIT = 5;
  return useInfiniteQuery({
    queryKey: "projects",
    queryFn: async ({ pageParam = 0 }) => {
      const res = await api.listDocuments(COLLECTION_ID_PROJECT, [
      const res = await api.listDocuments(COLLECTION_ID_PROJECT, [
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

const useCreateProject = (data: Project) => {
  return useMutation(() => api.createDocument(COLLECTION_ID_PROJECT, data));
  return useMutation(() => api.createDocument(COLLECTION_ID_PROJECT, data));
};

const useDeleteProject = (documentId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => api.deleteDocument(COLLECTION_ID_PROJECT, documentId),
    mutationFn: () => api.deleteDocument(COLLECTION_ID_PROJECT, documentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};

export {
  useCreateProject,
  useDeleteProject,
  useListProjectsPaginated,
  useNewProjects,
};
