import { COLLECTION_ID_USERS } from "@env";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Query } from "appwrite";
import { useIsFocused } from "@react-navigation/native";
import api from "../appwrite/api";

const useGetUserInfo = (userID: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.listDocuments(COLLECTION_ID_USERS, [
          Query.equal("userID", userID),
        ]);
        const res: any = response?.documents?.map((doc) => {
          return {
            id: doc.userID,
            username: doc.username,
            avatar: doc.profilePicture,
            xp: doc.xp,
          };
        });
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userID]);

  return user;
};

const useListUsers = (includeCurrUser?: boolean) => {
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
                if (includeCurrUser === true) {
                  return {
                    id: doc.userID,
                    username: doc.username,
                    avatar: doc.profilePicture,
                    xp: doc.xp,
                  };
                }
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
  }, [includeCurrUser, isFocused, userId]);

  return users;
};

export { useListUsers, useGetUserInfo };
