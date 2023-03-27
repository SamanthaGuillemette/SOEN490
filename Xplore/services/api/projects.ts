//removed useQuery import for the time being
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  COLLECTION_ID_PROJECT,
  COLLECTION_ID_PROJECT_TASKS,
  COLLECTION_ID_USERS,
} from "@env";
import api from "../appwrite/api";
import { useEffect, useState } from "react";
import { Query } from "appwrite";

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

const useAllMembersInfo = (listOfMembers: any) => {
  const [allMembers, setAllMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const membersList = listOfMembers;

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

export {
  useDeleteProject,
  useListProjectsPaginated,
  useCreateNewTask,
  useCreateNewProject,
  useAllMembersInfo,
};
