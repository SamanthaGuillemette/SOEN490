import { useQuery, useMutation } from "react-query";
import { PROJECT_COLLECTION_ID } from "@env";
import api from "../appwrite/api";

//to be defined
interface Project {}

const useListProjects = () => {
  return useQuery("projects", () => api.listDocuments(PROJECT_COLLECTION_ID));
};

const useCreateProject = (data: Project) => {
  return useMutation(() => api.createDocument(PROJECT_COLLECTION_ID, data));
};

const useDeleteProject = (documentId: string) => {
  return useMutation(() =>
    api.deleteDocument(PROJECT_COLLECTION_ID, documentId)
  );
};

export { useCreateProject, useDeleteProject, useListProjects };
