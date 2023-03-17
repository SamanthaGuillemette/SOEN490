import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import { UsersList, UserItem } from "./UsersList.component";

describe("UserItem should render correctly", () => {
  it("should render UserItem correctly and select it", () => {
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

  it("should be able to select users", () => {
    const { getByText, getAllByTestId } = render(<UsersList data={Users} />);
    expect(getAllByTestId("circle")).toHaveLength(3);
    fireEvent.press(getByText("Josh Lewis"));
    expect(getAllByTestId("circle")).toHaveLength(2);
    expect(getAllByTestId("check-circle")).toHaveLength(1);
  });
});
