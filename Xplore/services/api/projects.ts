//removed useQuery import for the time being
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
  useQuery,
} from "react-query";
import {
  COLLECTION_ID_PROJECT,
  COLLECTION_ID_PROJECT_TASKS,
  COLLECTION_ID_USERS,
} from "@env";
import api from "../appwrite/api";
import { Query } from "appwrite";
import { useState, useEffect } from "react";

//to be defined
interface Project {
  projectID?: string;
  isOwner?: boolean;
  name: string;
  description: string;
  imageURL?: string;
  tasks: string[];
  members: string[];
  percentComplete: number;
  category: string;
  startDate: string;
  endDate: string;
  goals: string[];
  requestJoin?: boolean;
  projectOwner: string;
}

const useCreateNewProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      let taskIDs: string[] = [];
      for (const task of data.tasks) {
        try {
          const res = await api.createDocument(
            COLLECTION_ID_PROJECT_TASKS,
            task
          );
          taskIDs.push(res.$id);
        } catch (e) {
          console.log(e);
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

// To update the list of projects per user once project is created
const updateUserProjList = async (memberList: any) => {
  try {
    const lastCreatedDoc = await api.listDocuments(COLLECTION_ID_PROJECT, [
      Query.orderDesc(""),
      Query.limit(1),
    ]);

    const lastProjectID = lastCreatedDoc.documents[0].$id;
    let allMembers: any = [];

    memberList.forEach((memberID: any) => {
      allMembers.push(memberID);
    });

    for (const memberID of allMembers) {
      const response = await api.listDocuments(COLLECTION_ID_USERS, [
        Query.equal("userID", memberID),
      ]);
      response?.documents?.map((doc: any) => {
        let projects = doc.projects;
        projects.push(lastProjectID);

        api.updateDocument(COLLECTION_ID_USERS, doc.$id, {
          projects: projects,
        });
      });
    }
  } catch (e) {
    console.log(e);
  }
};

// To update the project upon edit
const updateProject = async (projectID: any, values: any[]) => {
  try {
    const response = await api.getDocument(COLLECTION_ID_PROJECT, projectID);
    let taskIDs = response.tasks; // getting old task ids from db

    for (const task of values[7]) {
      const res = await api.createDocument(COLLECTION_ID_PROJECT_TASKS, task);
      taskIDs.push(res.$id);
    }

    api.updateDocument(COLLECTION_ID_PROJECT, projectID, {
      name: values[0],
      description: values[1],
      category: values[2],
      startDate: values[3],
      endDate: values[4],
      goals: values[5],
      members: values[6],
      tasks: taskIDs,
      //imageURL: imageURL,
    });
  } catch (e) {
    console.log(e);
  }
};

// const useFetchUserInfo = (userIds: string[]) => {
//   const [users, setUsers] = useState<
//     { userId: string; profilePicture: string }[]
//   >([]);

//   useEffect(() => {
//     const fetchInfo = async () => {
//       try {
//         const response = await api.listDocuments(COLLECTION_ID_USERS, [
//           Query.in("userId", userIds),
//         ]);

//         const data = await Promise.all(
//           response?.documents?.map(async (doc) => ({
//             userId: doc.userId,
//             profilePicture: doc.imageURL,
//           })) || []
//         );
//         setUsers(data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     fetchInfo();
//   }, [userIds]);

//   return users;
// };

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

  return data.length > 0 ? data[0].project : []; // return an empty array if data is empty or undefined
};

//Get number of tasks completed
const useTaskStats = (projects: any) => {
  const [completedTasks, setCompletedTasks] = useState<any>();
  const [activeTasks, setActiveTasks] = useState<any>();
  const [overdueTasks, setOverdueTasks] = useState<any>();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const userProjects = projects;
        var activeTask = 0;
        var overdueTask = 0;
        // Looping through list of projects
        var completedTask = 0;
        for (const project of userProjects) {
          // Looping through list of tasks
          for (let index in project.tasks) {
            const response = await api.getDocument(
              COLLECTION_ID_PROJECT_TASKS,
              project.tasks[index]
            );

            const data = {
              taskID: project.tasks[index],
              endDate: response.endDate,
              completed: response.completed,
            };
            data.completed === true ? completedTask++ : activeTask++; //increase number of user tasks completed
            new Date(project.endDate) < new Date() && data.completed === false
              ? overdueTask++
              : null;
          }
        }
        setCompletedTasks(completedTask);
        setActiveTasks(activeTask);
        setOverdueTasks(overdueTask);
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, [projects, completedTasks, activeTasks, overdueTasks]);

  return [completedTasks, activeTasks, overdueTasks];
};

// Getting information to display on the Project Card
const useProjectCardInfo = (contactID: any) => {
  const [completedProjects, setCompletedProjects] = useState<Project[]>([]);
  const [incompleteProjects, setIncompleteProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const projectList = await getProjectsList(contactID);

        // Looping through list of projects
        for (const docID of projectList) {
          const response = await api.getDocument(COLLECTION_ID_PROJECT, docID);

          const data: Project = {
            projectID: docID,
            isOwner: response.projectOwner === contactID,
            name: response.name,
            description: response.description,
            imageURL: response.imageURL,
            members: response.members,
            percentComplete: response.percentComplete,
            category: response.category,
            startDate: response.startDate,
            endDate: response.endDate,
            tasks: response.tasks,
            goals: response.goals,
            requestJoin: false,
            projectOwner: response.projectOwner,
          };

          // Filling different array based on if completed or incomplete project
          data.percentComplete === 100
            ? setCompletedProjects((oldArray) => [...oldArray, data])
            : setIncompleteProjects((oldArray) => [...oldArray, data]);
        }
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
        let tasksList = listOfTasks;
        tasksList = tasksList.filter((taskID: any) => taskID !== "");

        // Looping through list of tasks
        for (let index in tasksList) {
          const response = await api.getDocument(
            COLLECTION_ID_PROJECT_TASKS,
            tasksList[index]
          );

          const data = {
            taskID: tasksList[index],
            name: response.name,
            category: response.category,
            description: response.description,
            startDate: response.startDate,
            endDate: response.endDate,
            completed: response.completed,
          };
          setAllTasks((oldArray) => [...oldArray, data]); // pushing to array
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, [listOfTasks]);

  return allTasks; // returning array of all tasks for specific project
};

// To update task as completed
const setTaskCompleted = async (taskID: any) => {
  try {
    await api.updateDocument(COLLECTION_ID_PROJECT_TASKS, taskID, {
      completed: true,
    });
  } catch (e) {
    console.log(e);
  }
};

// To delete task
const deleteTask = async (taskID: any, projectID: any) => {
  try {
    // Delete the task document from the project tasks collection
    await api.deleteDocument(COLLECTION_ID_PROJECT_TASKS, taskID);

    const response = await api.getDocument(COLLECTION_ID_PROJECT, projectID);
    let tasksList = response.tasks;
    tasksList = tasksList.filter((ID: any) => ID !== taskID); // removing the task ID

    // console.log(taskID);

    // Overwriting the task attribute in the project's document
    await api.updateDocument(COLLECTION_ID_PROJECT, projectID, {
      tasks: tasksList,
    });
  } catch (e) {
    console.log(e);
  }
};

// Getting information for all members in a project
const useAllMembersInfo = (listOfMembers: any) => {
  const [allMembers, setAllMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        let membersList = listOfMembers;
        membersList = membersList.filter((memberID: any) => memberID !== "");

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
          setAllMembers((oldArray) => [...oldArray, data[0]]); // pushing to array
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, [listOfMembers]);

  return allMembers; // returning array of all members for specific project
};

const setMemberCount = async () => {
  try {
    const response = await api.listDocuments(COLLECTION_ID_PROJECT, []);
    response?.documents?.map((doc: any) => {
      api.updateDocument(COLLECTION_ID_PROJECT, doc.$id, {
        memberCount: doc.members.length,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

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

const usePopularProjects = () => {
  const LIMIT = 5;
  // Ensure memberCount is set before retrieving popular projects
  setMemberCount();
  return useQuery({
    queryKey: ["popularProjects"],
    queryFn: () =>
      api.listDocuments(COLLECTION_ID_PROJECT, [
        api.query.limit(LIMIT),
        api.query.orderDesc("memberCount"),
      ]),
  });
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

export {
  useCreateProject,
  useDeleteProject,
  useListProjectsPaginated,
  useProjectCardInfo,
  useAllTasksInfo,
  useAllMembersInfo,
  useNewProjects,
  usePopularProjects,
  setTaskCompleted,
  deleteTask,
  useFetchUserProjects,
  useTaskStats,
  useCreateNewTask,
  useCreateNewProject,
  updateUserProjList,
  updateProject,
};
