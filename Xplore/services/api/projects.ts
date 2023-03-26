//removed useQuery import for the time being
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { COLLECTION_ID_PROJECT, COLLECTION_ID_PROJECT_TASKS } from "@env";
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

const useCreateNewProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      console.log(data);
      let taskIDs: string[] = [];
      for (const task of data.tasks) {
        try {
          const res = await api.createDocument(
            COLLECTION_ID_PROJECT_TASKS,
            task
          );
          taskIDs.push(res.$id);
        } catch (e) {
          console.log(
            "shit got fucked up yo, this is what the server said: ${e}"
          );
        }
      }
      return api.createDocument(COLLECTION_ID_PROJECT, {
        ...data.project,
        tasks: taskIDs,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    retry: 2,
  });
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

const useCreateNewTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) =>
      api.createDocument(COLLECTION_ID_PROJECT_TASKS, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export {
  useDeleteProject,
  useListProjectsPaginated,
  useCreateNewTask,
  useCreateNewProject,
};
