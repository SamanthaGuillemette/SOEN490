//removed useQuery import for the time being
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { COLLECTION_ID_PROJECT, COLLECTION_ID_USERS } from "@env";
import api from "../appwrite/api";
import { Query } from "appwrite";
import { useState, useEffect } from "react";

//to be defined
interface Project {}

// Getting all projects assigned to logged in user
const getProjectsList = async (contactID: any) => {
  const response = await api.listDocuments(COLLECTION_ID_USERS, [
    Query.equal("userID", contactID),
  ]);

  const data = await Promise.all(
    response?.documents?.map(async (doc) => ({
      project: doc.projects,
    }))
  );

  return data[0].project; // returning list of projects
};

// Getting information to display on the Project Card
const useProjectCardInfo = (contactID: any) => {
  const [completedProjects, setCompletedProjects] = useState<any[]>([]);
  const [incompleteProjects, setIncompleteProjects] = useState<any[]>([]);

  // Looping through list of projects
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const projectList = await getProjectsList(contactID);
        let tempCompArray = [];
        let tempIncArray = [];

        for (const docID of projectList) {
          const response = await api.getDocument(COLLECTION_ID_PROJECT, docID);

          const data = {
            name: response.name,
            description: response.description,
            projectImage: "https://picsum.photos/200", // HARDCODED
            tasks: response.tasks.length,
            conversation: 38, // HARDCODED
            members: response.members,
            percentComplete: response.percentComplete,
            category: response.category,
            startDate: response.startDate,
            endDate: response.endDate,
            tasksList: response.tasks,
            goals: response.goals,
          };

          // Filling different array based on if completed or incomplete project
          data.percentComplete === 100
            ? tempCompArray.push(data)
            : tempIncArray.push(data);
        }

        setCompletedProjects(tempCompArray);
        setIncompleteProjects(tempIncArray);
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, [contactID]);

  return [incompleteProjects, completedProjects]; // returning array of all projects
};

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

export {
  useCreateProject,
  useDeleteProject,
  useListProjectsPaginated,
  useProjectCardInfo,
};
