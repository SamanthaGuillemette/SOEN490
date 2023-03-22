//removed useQuery import for the time being
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { COLLECTION_ID_PROJECT, COLLECTION_ID_USERS } from "@env";
import { Query } from "appwrite";
import api from "../appwrite/api";
import { useEffect, useState } from "react";

//to be defined
interface Project {
  projects: string[];
}

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

const getUserProjects = async (userId: string) => {
  const response = await api.listDocuments(COLLECTION_ID_USERS, [
    Query.equal("userID", userId),
  ]);
  const data = await Promise.all(
    response?.documents?.map(async (doc) => ({
      projects: doc.projects,
    }))
  );
  return data;
};

const useUserProjects = (userId: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userprojects = await getUserProjects(userId);
        setProjects(userprojects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);
  return projects;
};

const getCurrentProject = async (collectionId: any, projects: string[]) => {
  const response = await api.listDocuments(collectionId, [
    Query.equal("projectId", projects[0]),
  ]); // filter out null values
  const currentUserProject = await Promise.all(
    response?.documents?.map(async (doc) => ({
      id: doc.projectId,
      name: doc.name,
      description: doc.description,
      projectImage: doc.projectImage,
      tasks: doc.tasks,
      members: doc.members,
      percentComplete: doc.percentComplete,
    }))
  );
  return currentUserProject;
};

export {
  useCreateProject,
  useDeleteProject,
  useListProjectsPaginated,
  getUserProjects,
  getCurrentProject,
  useUserProjects,
};
