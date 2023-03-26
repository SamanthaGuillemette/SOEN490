//removed useQuery import for the time being
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import {
  COLLECTION_ID_PROJECT,
  COLLECTION_ID_PROJECT_TASKS,
  COLLECTION_ID_USERS,
} from "@env";
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

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const projectList = await getProjectsList(contactID);
        let tempCompArray = [];
        let tempIncArray = [];

        // Looping through list of projects
        for (const docID of projectList) {
          const response = await api.getDocument(COLLECTION_ID_PROJECT, docID);

          const data = {
            name: response.name,
            description: response.description,
            projectImage: response.imageURL,
            conversation: 38, // HARDCODED
            members: response.members,
            percentComplete: response.percentComplete,
            category: response.category,
            startDate: response.startDate,
            endDate: response.endDate,
            tasks: response.tasks,
            goals: response.goals,
            requestJoin: false, // HARDCODED
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

// Getting information for all tasks in a project
const useAllTasksInfo = (listOfTasks: any) => {
  const [allTasks, setAllTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const tasksList = listOfTasks;
        let tempArray = [];

        // Looping through list of tasks
        for (let index in tasksList) {
          const response = await api.getDocument(
            COLLECTION_ID_PROJECT_TASKS,
            tasksList[index]
          );

          const data = {
            name: response.name,
            category: response.category,
            description: response.description,
            startDate: response.startDate,
            endDate: response.endDate,
          };
          tempArray.push(data); // pushing to array
        }
        setAllTasks(tempArray);
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, [listOfTasks]);

  return allTasks; // returning array of all tasks for specific project
};

// Getting information for all members in a project
const useAllMembersInfo = (listOfMembers: any) => {
  const [allMembers, setAllMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const membersList = listOfMembers;
        let tempArray = [];

        // Looping through list of members
        for (let index in membersList) {
          const response = await api.listDocuments(COLLECTION_ID_USERS, [
            Query.equal("userID", membersList[index]),
          ]);

          const data = await Promise.all(
            response?.documents?.map(async (doc) => ({
              username: doc.username,
              profilePicture: doc.imageURL,
              xp: doc.xp,
              userID: doc.userID,
            }))
          );
          tempArray.push(data[0]); // pushing to array
        }
        setAllMembers(tempArray);
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, [listOfMembers]);

  return allMembers; // returning array of all members for specific project
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
  useAllTasksInfo,
  useAllMembersInfo,
};
