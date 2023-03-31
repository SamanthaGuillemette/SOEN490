import React from "react";
import { MessageMember } from "./MessageMember.component";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, fireEvent } from "@testing-library/react-native";
import api from "../../services/appwrite/api";
import * as chats from "../../services/api/chats";

const queryClient = new QueryClient();

describe("Member should render correctly", () => {
  it("should render correctly with the username", () => {
    const { queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <MessageMember
          avatar="TestAvatar"
          username="TestUsername"
          xp={20}
          id="1234"
        />
      </QueryClientProvider>
    );
    expect(queryByText("TestUsername")).not.toBeNull();
  });

  it("should render correctly with the label 'Message'", () => {
    const { queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <MessageMember
          avatar="TestAvatar"
          username="TestUsername"
          xp={20}
          id="1234"
        />
      </QueryClientProvider>
    );
    expect(queryByText("Message")).not.toBeNull();
  });

  it("should be able to click the Message Button'", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MessageMember
          avatar="TestAvatar"
          username="TestUsername"
          xp={20}
          id="1234"
        />
      </QueryClientProvider>
    );
    fireEvent.press(getByText("Message"));
  });

  it("should be able view messages'", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MessageMember
          avatar="TestAvatar"
          username="TestUsername"
          xp={20}
          id="1234"
        />
      </QueryClientProvider>
    );
    jest.spyOn(api, "listDocuments").mockReturnValue({
      documents: [
        {
          $collectionId: "testCollectionId",
          $createdAt: "2023-03-19T16:22:25.942+00:00",
          $databaseId: "testDatabaseId",
          $id: "testId",
          $permissions: [],
          $updatedAt: "2023-03-31T05:41:06.412+00:00",
          chatID: "testChatId",
          contactID: "testContactId",
          lastMessage: "testMessage",
          lastModifiedAt: "2023-03-19T16:22:31.075Z",
          seen: true,
          userID: "testUserId",
        },
      ],
      total: 1,
    });
    fireEvent.press(getByText("Message"));
  });

  it("should be able view 0 messages'", () => {
    jest
      .spyOn(api, "listDocuments")
      .mockReturnValue({
        documents: [
          {
            $collectionId: "testCollectionId",
            $createdAt: "2023-03-19T16:22:25.942+00:00",
            $databaseId: "testDatabaseId",
            $id: "testId",
            $permissions: [],
            $updatedAt: "2023-03-31T05:41:06.412+00:00",
            chatID: "testChatId",
            contactID: "testContactId",
            lastMessage: "testMessage",
            lastModifiedAt: "2023-03-19T16:22:31.075Z",
            seen: true,
            userID: "testUserId",
          },
        ],
        total: 1,
      })
      .mockReturnValueOnce({
        documents: [{}],
        total: 0,
      });

    const createNewChat = jest
      .spyOn(chats, "createNewChat")
      .mockImplementation();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MessageMember
          avatar="TestAvatar"
          username="TestUsername"
          xp={20}
          id="1234"
        />
      </QueryClientProvider>
    );
    fireEvent.press(getByText("Message"));
    expect(createNewChat).toBeCalledTimes(0);
  });
});
