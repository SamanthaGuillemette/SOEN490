import api from "../services/appwrite/api";
import { COLLECTION_ID_PROJECT } from "@env";
import { Button, Text } from "react-native";
import { projects } from "./projects_database_seed";
import { users } from "./users_database_seed";

const deleteAllDocuments = async (collectionId: string) => {
  const projectsToSeed = await api.listDocuments(collectionId);
  const IDs = projectsToSeed.documents.map((project) => project.$id);
  for (const id of IDs) {
    await api.deleteDocument(collectionId, id);
  }
};

const createBulkProjects = async (data) => {
  for (const d of data) {
    try {
      console.log(d);
      await api.createDocument(COLLECTION_ID_PROJECT, d);
    } catch (e) {
      console.log(e);
    }
  }
};

// const associateProjectsToUsers = async (data) => {
//   const projects = await api.listDocuments(PROJECT_COLLECTION_ID);

// }

const createBulkUsers = async (data: Object[]) => {
  for (const user of data) {
    try {
      await api.createAccount(user.email, user.password, user.username);
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
        title="seed projects"
        onPress={() => createBulkProjects(projects)}
      />
      <Button title="seed users" onPress={() => createBulkUsers(users)} />
      <Button
        title="delete all projects"
        onPress={() => deleteAllDocuments(COLLECTION_ID_PROJECT)}
      />
      <Text>-------------------------------------------</Text>
    </>
  );
};

export default { DatabaseApiTesting, createBulkProjects, deleteAllDocuments };
