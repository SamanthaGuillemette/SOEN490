import { Client, Databases, Account, ID } from "appwrite";
import { DATABASE_ID, ENDPOINT, PROJECT_ID } from "@env";
import { AccountObject } from "./serverTypes";

// Interface of our Appwrite API - provides us autocompletion
interface apiInterface {
  sdk: { account: Account; database: Databases } | null;
  provider: () => any;

  createAccount: (
    email: string,
    password: string,
    name: string
  ) => Promise<any>;

  getAccount: () => Promise<AccountObject>;

  createSession: (email: string, password: string) => Promise<any>;

  deleteCurrentSession: () => Promise<any>;

  createDocument: (
    collectionId: string,
    documentId: string,
    data: Object
  ) => Promise<any>;

  listDocuments: (collectionId: string) => Promise<any>;

  updateDocument: (
    collectionId: string,
    documentId: string,
    data: Object
  ) => Promise<any>;

  deleteDocument: (collectionId: string, documentId: string) => Promise<any>;
}

let api: apiInterface = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let client = new Client();
    client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
    const account = new Account(client);
    const database = new Databases(client);

    api.sdk = { account, database };
    return client;
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  createDocument: (collectionId, documentId, data) => {
    return api
      .provider()
      .database.createDocument(DATABASE_ID, collectionId, documentId, data);
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(DATABASE_ID, collectionId);
  },

  updateDocument: (collectionId, documentId, data) => {
    return api
      .provider()
      .database.updateDocument(DATABASE_ID, collectionId, documentId, data);
  },

  deleteDocument: (collectionId, documentId) => {
    return api
      .provider()
      .database.deleteDocument(DATABASE_ID, collectionId, documentId);
  },
};

export default api;
