import api from "../services/appwrite/api";
import { PROJECT_COLLECTION_ID } from "@env";
import { Button } from "react-native";
import { projects } from "./database_seed";

const deleteAllDocuments = async (collectionId: string) => {
  const projectsToSeed = await api.listDocuments(collectionId);
  const IDs = projectsToSeed.documents.map((project) => project.$id);
  for (const id of IDs) {
    await api.deleteDocument(collectionId, id);
  }
};

const createBulkProjects = async (data: Object[]) => {
  for (const d of data) {
    try {
      console.log(d);
      await api.createDocument(PROJECT_COLLECTION_ID, d);
    } catch (e) {
      console.log(e);
    }
  }
};

export const DatabaseApiTesting = () => {
  return (
    <>
      <Button
        title="seed projects"
        onPress={() => createBulkProjects(projects)}
      />
      <Button
        title="delete projects"
        onPress={() => deleteAllDocuments(PROJECT_COLLECTION_ID)}
      />
    </>
  );
};

export default { DatabaseApiTesting, createBulkProjects, deleteAllDocuments };
