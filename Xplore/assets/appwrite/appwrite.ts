import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://appwrite.vidyas.ca/v1")
  .setProject("6328cdfa2f317255c591");

export const account = new Account(client);

export const databases = new Databases(client);
