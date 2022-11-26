import { ENDPOINT, PROJECT_ID } from "@env";
import { Client, Databases, Account } from "appwrite";

let api = {
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
};
