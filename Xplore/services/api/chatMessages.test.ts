import api from "../appwrite/api";
import { createMessage } from "./chatMessages";

describe("All functions in chatMessages should work", () => {
  it("should be able to create a Message", () => {
    jest.mock("../appwrite/api");
    createMessage("testMessageData", "group", "testId", "testUserId");
  });
});
