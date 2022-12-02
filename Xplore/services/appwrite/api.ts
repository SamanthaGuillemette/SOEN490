import { DATABASE_ID, ENDPOINT, PROJECT_ID } from "@env";
import { Client, Databases, Account, ID, Models } from "appwrite";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const account = new Account(client);
const database = new Databases(client);

const api = {
  createAccount: async (email: string, password: string, name: string) => {
    return await account.create(ID.unique(), email, password, name);
  },

  getAccount: async () => {
    return await account.get();
  },

  createSession: async (email: string, password: string) => {
    return await account.createEmailSession(email, password);
  },

  deleteCurrentSession: async () => {
    return await account.deleteSession("current");
  },

  createDocument: async (
    collectionId: string,
    data: Omit<Models.Document, keyof Models.Document>
  ) => {
    return await database.createDocument(
      DATABASE_ID,
      collectionId,
      ID.unique(),
      data
    );
  },

  listDocuments: async (collectionId: string) => {
    return await database.listDocuments(DATABASE_ID, collectionId);
  },

  updateDocument: async (
    collectionId: string,
    documentId: string,
    data: Omit<Models.Document, keyof Models.Document>
  ) => {
    return await database.updateDocument(
      DATABASE_ID,
      collectionId,
      documentId,
      data
    );
  },

  deleteDocument: async (collectionId: string, documentId: string) => {
    return await database.deleteDocument(DATABASE_ID, collectionId, documentId);
  },
};

export default api;
