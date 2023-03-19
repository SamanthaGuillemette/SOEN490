import { COLLECTION_ID_USERS } from "@env";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useIsFocused } from "@react-navigation/native";
import api from "../appwrite/api";

const useListUsers = () => {
  const isFocused = useIsFocused();
  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) {
          const response = await api.listDocuments(COLLECTION_ID_USERS);
          const usersList = response?.documents
            ?.map((doc) => {
              if (doc.userID === userId) {
                return null; // skip this user
              } else {
                return {
                  id: doc.userID,
                  username: doc.username,
                  avatar: doc.profilePicture,
                  xp: doc.xp,
                };
              }
            })
            .filter(Boolean); // filter out null values
          setUsers(usersList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isFocused, userId]);

  return users;
};

export { useListUsers };
