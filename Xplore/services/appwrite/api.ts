import { DATABASE_ID, ENDPOINT, PROJECT_ID } from "@env";
import {
  Client,
  Databases,
  Account,
  ID,
  Models,
  Query,
  Storage,
} from "appwrite";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

const api = {
  query: Query,
  createAccount: (email: string, password: string, name: string) => {
    return account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    return account.get();
  },

  updateUsername: (newName: string) => {
    return account.updateName(newName);
  },

  updatePassword: (newPassword: string) => {
    return account.updatePassword(newPassword);
  },

  getSession: (sessionId: string) => {
    return account.getSession(sessionId);
  },

  createEmailVerification: (app_url: string) => {
    return account.createVerification(app_url);
  },

  createPasswordRecovery: (email: string, app_url: string) => {
    return account.createRecovery(email, app_url);
  },

  createPasswordRecoveryConfirm: (
    userid: string,
    secret: string,
    password: string
  ) => {
    return account.updateRecovery(userid, secret, password, password);
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

  listDocuments: (collectionId: string, queries: string[] | null = null) => {
    return queries
      ? database.listDocuments(DATABASE_ID, collectionId, queries)
      : database.listDocuments(DATABASE_ID, collectionId);
  },

  getDocument: (collectionId: string, documentId: string) => {
    return database.getDocument(DATABASE_ID, collectionId, documentId);
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

  createFile: (bucket: string, userId: string, file: File) => {
    // return storage.createFile(bucket, `${userId}-${ID.unique()}`, file);
    return storage.createFile(bucket, `${ID.unique()}`, file);
  },

  getFilePreview: (bucket: string, fileId: string) => {
    return storage.getFilePreview(bucket, fileId);
  },

  listFiles: (
    bucket: string,
    queries: string[] | undefined = undefined,
    search?: string
  ) => {
    return storage.listFiles(bucket, queries, search);
  },

  deleteFile: (bucket: string, fileId: string) => {
    return storage.deleteFile(bucket, fileId);
  },
};

export default api;
