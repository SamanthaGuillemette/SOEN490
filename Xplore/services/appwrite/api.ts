import { DATABASE_ID, ENDPOINT, PROJECT_ID } from "@env";
import { Client, Databases, Account, ID, Models } from "appwrite";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
export const account = new Account(client);
const database = new Databases(client);

const api = {
  createAccount: (email: string, password: string, name: string) => {
    return account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    return account.get();
  },

  getSession: (sessionId: string) => {
    return account.getSession(sessionId);
  },

  createEmailVerification: (app_url: string) => {
    return account.createVerification(app_url);
  },

  updateEmailVerification: (userID: string, secret: string) => {
    return account.updateVerification(userID, secret);
  },

  getUserPreferences: () => {
    return account.getPrefs();
  },

  createSession: (email: string, password: string) => {
    return account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return account.deleteSession("current");
  },

  createDocument: (
    collectionId: string,
    data: Omit<Models.Document, keyof Models.Document>
  ) => {
    return database.createDocument(
      DATABASE_ID,
      collectionId,
      ID.unique(),
      data
    );
  },

  listDocuments: async (
    collectionId: string,
    queries: string[] | null = null
  ) => {
    return await (queries
      ? database.listDocuments(DATABASE_ID, collectionId, queries)
      : database.listDocuments(DATABASE_ID, collectionId));
  },

  updateDocument: (
    collectionId: string,
    documentId: string,
    data: Omit<Models.Document, keyof Models.Document>
  ) => {
    return database.updateDocument(DATABASE_ID, collectionId, documentId, data);
  },

  deleteDocument: (collectionId: string, documentId: string) => {
    return database.deleteDocument(DATABASE_ID, collectionId, documentId);
  },
};

export default api;
