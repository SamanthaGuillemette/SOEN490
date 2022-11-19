import { Client, Account, Databases } from "appwrite";

const client = new Client();

const API_ROUTE: string = process.env.API_ROOT as string;
const PROJECT_KEY: string = process.env.PROJECT_KEY as string;

client.setEndpoint(API_ROUTE).setProject(PROJECT_KEY);

export const account = new Account(client);

export const db = new Databases(client);
