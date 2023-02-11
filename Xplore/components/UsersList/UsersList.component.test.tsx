import React from "react";
import { render } from "react-native-testing-library";
import { UsersList, UserItem } from "./UsersList.component";

describe("UserItem should render correctly", () => {
  it("should render UserItem correctly", () => {
    const { queryByText } = render(
      <UserItem
        avatar="TestAvatar"
        id="TestID"
        username="TestUsername"
        xp={5}
      />
    );
    expect(queryByText("TestUsername")).not.toBeNull();
    expect(queryByText("5 XP")).not.toBeNull();
  });
});

describe("UserList should render correctly", () => {
  interface UsersType {
    id: string;
    username: string;
    avatar: string;
    xp: number;
  }

  const Users: UsersType[] = [
    {
      id: "1",
      username: "Josh Lewis",
      avatar: "https://picsum.photos/200",
      xp: 103597,
    },
    {
      id: "2",
      username: "Amy Lucas",
      avatar: "https://picsum.photos/200",
      xp: 103597,
    },
    {
      id: "3",
      username: "Landon Clayton",
      avatar: "https://picsum.photos/200",
      xp: 103597,
    },
  ];

  it("should render correctly", () => {
    const userList = render(<UsersList data={Users} />);
    expect(userList).toBeTruthy();
  });

  it("should render UserList correctly", () => {
    const { queryByText } = render(<UsersList data={Users} />);
    expect(queryByText("Josh Lewis")).not.toBeNull();
    expect(queryByText("Amy Lucas")).not.toBeNull();
    expect(queryByText("Landon Clayton")).not.toBeNull();
  });
});
