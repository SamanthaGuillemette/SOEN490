import { Client, Account, Databases } from "appwrite";

const client = new Client();

// const API_ROUTE: string = process.env.API_ROUTE as string;
// const PROJECT_KEY: string = process.env.PROJECT_KEY as string;

client
  .setEndpoint("https://appwrite.vidyas.ca/v1")
  .setProject("6328cdfa2f317255c591");

export const account = new Account(client);
export const databases = new Databases(client);
