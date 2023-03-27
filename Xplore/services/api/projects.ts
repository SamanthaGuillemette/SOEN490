//removed useQuery import for the time being
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
  useQuery,
} from "react-query";
import { COLLECTION_ID_PROJECT, BUCKET_PROJECT_PIC } from "@env";
import api from "../appwrite/api";

//to be defined
interface Project {}

const useListProjectsPaginated = () => {
  const LIMIT = 5;
  return useInfiniteQuery({
    queryKey: "projects",
    queryFn: async ({ pageParam = 0 }) => {
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

const useFetchUserProjects = (projectIDs: string[]) =>
  useQuery({
    queryKey: ["projects", projectIDs],
    queryFn: () =>
      api.listDocuments(COLLECTION_ID_PROJECT, [
        api.query.equal("$id", [...projectIDs]),
      ]),
    retry: 2,
  });

const useCreateProject = (data: Project) => {
  return useMutation(() => api.createDocument(COLLECTION_ID_PROJECT, data));
};

const useDeleteProject = (documentId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => api.deleteDocument(COLLECTION_ID_PROJECT, documentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};

const useUploadProjectPicture = async (projectPicture: any) => {
  return useQuery({
    queryKey: ["projectPicture", projectPicture],
    queryFn: () => api.uploadImage(BUCKET_PROJECT_PIC, projectPicture),
  });
};

export {
  useCreateProject,
  useDeleteProject,
  useListProjectsPaginated,
  useFetchUserProjects,
  useUploadProjectPicture,
};
