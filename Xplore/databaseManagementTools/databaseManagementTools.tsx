import api from "../services/appwrite/api";
import {
  COLLECTION_ID_PROJECT,
  COLLECTION_ID_PROJECT_TASKS,
  COLLECTION_ID_USERS,
} from "@env";
import { Button, Text } from "react-native";
import { projects } from "./projects";
// import { users } from "./users_database_seed";
let userDataJSON = require("./users.json");
import { tasks } from "./tasks";

export const deleteAllDocuments = async (collectionId: string) => {
  const data = await api.listDocuments(collectionId);
  const IDs = data.documents.map((el) => el.$id);
  console.log("Ids", IDs);
  for (const id of IDs) {
    await api.deleteDocument(collectionId, id);
  }
};

export const seedProjects = async () => {
  for (const p of projects) {
    let taskIDs = [];
    try {
      for (const t of tasks) {
        try {
          const res = await api.createDocument(COLLECTION_ID_PROJECT_TASKS, t);
          taskIDs.push(res.$id);
        } catch (e) {
          console.log(e);
        }
      }
      let users = await api.listDocuments(COLLECTION_ID_USERS, [
        api.query.limit(100),
      ]);
      let userIDs = users.documents.map((u) => u.$id);
      let randomStartIndex = Math.floor(Math.random() * userIDs.length);
      let randomEndIndex =
        Math.floor(Math.random() * (userIDs.length - randomStartIndex)) +
        randomStartIndex;
      let memberIDs = userIDs.slice(randomStartIndex, randomEndIndex + 1);
      let owner = memberIDs[Math.floor(Math.random() * memberIDs.length)];
      await api.createDocument(COLLECTION_ID_PROJECT, {
        ...p,
        members: memberIDs,
        projectOwner: owner,
        tasks: taskIDs,
      });
    } catch (e) {
      console.log(e);
    }
  }
};

export const assignProjectsToUsers = async () => {
  const projs = await api.listDocuments(COLLECTION_ID_PROJECT, [
    api.query.limit(100),
  ]);
  let users = await api.listDocuments(COLLECTION_ID_USERS, [
    api.query.limit(100),
  ]);
  let userIDs = users.documents.map((u) => u.$id);

  for (const uid of userIDs) {
    let userProjs = [];
    try {
      for (const proj of projs.documents) {
        try {
          if (proj.members.includes(uid)) {
            userProjs.push(proj.$id);
          }
        } catch (e) {
          console.log(e);
        }
        await api.updateDocument(COLLECTION_ID_USERS, uid, {
          projects: userProjs,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
};

export const seedUsersFromAuth = async () => {
  const projects_ = await api.listDocuments(COLLECTION_ID_PROJECT);
  const projectIDs = projects_.documents.map((project) => project.$id);
  let userData = userDataJSON.users;
  for (const d of userData) {
    try {
      await api.createDocument(COLLECTION_ID_USERS, {
        userID: d.$id,
        username: d.name,
        profilePicture: "",
        xp: Math.floor(Math.random() * 59901) + 100,
        projects: projectIDs.sort(() => 0.5 - Math.random()).slice(0, 4),
        friends: projectIDs
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)
          .filter((uid) => uid !== d.$id),
      });
    } catch (e) {
      console.log(e);
    }
  }
};

export const DatabaseApiTesting = () => {
  return (
    <>
      <Text>---------------database tools------------</Text>
      <Button
        title="delete users"
        onPress={() => deleteAllDocuments(COLLECTION_ID_USERS)}
      />
      <Button
        title="delete projects"
        onPress={() => deleteAllDocuments(COLLECTION_ID_PROJECT)}
      />
      <Button
        title="delete project tasks"
        onPress={() => deleteAllDocuments(COLLECTION_ID_PROJECT_TASKS)}
      />
      <Text>-------------------------------------------</Text>

      <Button
        title="seed users from auth"
        onPress={() => seedUsersFromAuth()}
      />
      <Button title="seed projects" onPress={() => seedProjects()} />
      <Button
        title="assign projects to users"
        onPress={() => assignProjectsToUsers()}
      />
      <Text>-------------------------------------------</Text>
    </>
  );
};

export default {
  DatabaseApiTesting,
  seedUsersFromAuth,
  deleteAllDocuments,
  seedProjects,
};

//DO NOT USE. ONLY FOR CREATING USERS IN APPWRITES USER DATABASE, AND NOT THE "USERS" COLLECTION WE CREATED OURSELVES
//
// const seedAuthUsers = async () => {
//   for (const user of users) {
//     try {
//       await api.createAccount(user.email, user.password, user.username);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// };
