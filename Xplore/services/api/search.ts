import { COLLECTION_ID_USERS } from "@env";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import api from "../appwrite/api";

interface UserType {
  id: string;
  username: string;
  avatar: string;
  xp: number;
}

const useListUsers = () => {
  const isFocused = useIsFocused();
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) {
          const response = await api.listDocuments(COLLECTION_ID_USERS);
          const data = response?.documents?.map((doc) => ({
            id: doc.userID,
            username: doc.username,
            avatar: doc.profilePicture,
            xp: doc.xp,
          }));
          setUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isFocused]);

  return users;
};

export { useListUsers };
