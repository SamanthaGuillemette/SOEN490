import { DATABASE_ID, ENDPOINT, PROJECT_ID } from "@env";
import { Client, Databases, Account, ID, Models } from "appwrite";
// import { AccountObject } from "./serverTypes";

// Interface of our Appwrite API - provides us autocompletion
// interface apiInterface {
//   sdk?: { account: Account; database: Databases } | null;
//   provider?: () => any;

//   createAccount: (
//     email: string,
//     password: string,
//     name: string
//   ) => Promise<any>;

//   getAccount: () => Promise<AccountObject>;

//   createSession: (email: string, password: string) => Promise<any>;

//   deleteCurrentSession: () => Promise<any>;

//   createDocument: (
//     collectionId: string,
//     documentId: string,
//     data: any
//   ) => Promise<any>;

//   listDocuments: (collectionId: string) => Promise<any>;

//   updateDocument: (
//     collectionId: string,
//     documentId: string,
//     data: any
//   ) => Promise<any>;

//   deleteDocument: (collectionId: string, documentId: string) => Promise<any>;
// }

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const account = new Account(client);
const database = new Databases(client);

const api = {
  createAccount: (email: string, password: string, name: string) => {
    return account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    return account.get();
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

  listDocuments: (collectionId: string) => {
    return database.listDocuments(DATABASE_ID, collectionId);
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
