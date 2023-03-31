import { MembersActionsModal } from "./MembersActionsModal.component";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import * as chats from "../../services/api/chats";
import * as chatSettings from "../../services/api/chatSettings";
import * as notifications from "../../services/api/notifications";

const modal = jest.fn();
const query = new QueryClient();
const users = [
  { avatar: "", id: "testId1", username: "test1", xp: 30650 },
  { avatar: "", id: "testId2", username: "test2", xp: 52951 },
];

afterEach(() => {
  cleanup();
});

describe("AddMemberModalComponent Renders", () => {
  it("renders the modal component", () => {
    const { container } = render(
      <QueryClientProvider client={query}>
        <MembersActionsModal
          setActionsModalVisible={modal}
          action={"testAction"}
          users={users}
        />
      </QueryClientProvider>
    );

    expect(container).toBeTruthy();
  });
});

describe("AddMemberModal should have appropriate users", () => {
  it("Should render two users", () => {
    const { queryByText } = render(
      <QueryClientProvider client={query}>
        <MembersActionsModal
          setActionsModalVisible={modal}
          action={"testAction"}
          users={users}
        />
      </QueryClientProvider>
    );
    expect(queryByText("test1")).not.toBeNull();
    expect(queryByText("test2")).not.toBeNull();
  });

  it("Should be able to select a user", () => {
    const { getByText } = render(
      <QueryClientProvider client={query}>
        <MembersActionsModal
          setActionsModalVisible={modal}
          action={"testAction"}
          users={users}
        />
      </QueryClientProvider>
    );
    fireEvent.press(getByText("test1"));
    fireEvent.press(getByText("testAction"));
    expect(modal).toBeCalledTimes(1);
  });

  it("Should be able to select a user with action create group", () => {
    const { getByText } = render(
      <QueryClientProvider client={query}>
        <MembersActionsModal
          setActionsModalVisible={modal}
          action={"Create Group"}
          users={users}
        />
      </QueryClientProvider>
    );
    const groupChat = jest.spyOn(chats, "createNewGroupChat");
    fireEvent.press(getByText("test1"));
    fireEvent.press(getByText("Create Group"));
    expect(modal).toBeCalledTimes(2);
    expect(groupChat).toBeCalledTimes(1);
  });

  it("Should be able to select a user with action Add Members", () => {
    const { getByText } = render(
      <QueryClientProvider client={query}>
        <MembersActionsModal
          setActionsModalVisible={modal}
          action={"Add Members"}
          users={users}
        />
      </QueryClientProvider>
    );
    const addToChat = jest.spyOn(chatSettings, "addToChat");
    const createGroupAdd = jest.spyOn(notifications, "createGroupAddNotif");
    fireEvent.press(getByText("test1"));
    fireEvent.press(getByText("Add Members"));
    expect(modal).toBeCalledTimes(3);
    expect(addToChat).toBeCalledTimes(1);
    expect(createGroupAdd).toBeCalledTimes(1);
  });

  it("Should be able to select a user with action Remove Members", () => {
    const { getByText } = render(
      <QueryClientProvider client={query}>
        <MembersActionsModal
          setActionsModalVisible={modal}
          action={"Remove Members"}
          users={users}
        />
      </QueryClientProvider>
    );
    const removeFromChat = jest.spyOn(chatSettings, "removeFromChat");
    fireEvent.press(getByText("test1"));
    fireEvent.press(getByText("Remove Members"));
    expect(modal).toBeCalledTimes(4);
    expect(removeFromChat).toBeCalledTimes(1);
  });
});
