import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersList } from "./UsersList.component";

describe("UserList should render correctly for selectUserList", () => {
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
    const userList = render(
      <UsersList data={Users} messageUserList={false} selectUserList={true} />
    );
    expect(userList).toBeTruthy();
  });

  it("should render UserList correctly", () => {
    const { queryByText } = render(
      <UsersList data={Users} messageUserList={false} selectUserList={true} />
    );
    expect(queryByText("Josh Lewis")).not.toBeNull();
    expect(queryByText("Amy Lucas")).not.toBeNull();
    expect(queryByText("Landon Clayton")).not.toBeNull();
  });

  it("should be able to select users", () => {
    const { getByText, getAllByTestId } = render(
      <UsersList data={Users} messageUserList={false} selectUserList={true} />
    );
    expect(getAllByTestId("circle")).toHaveLength(3);
    fireEvent.press(getByText("Josh Lewis"));
    expect(getAllByTestId("circle")).toHaveLength(2);
    expect(getAllByTestId("check-circle")).toHaveLength(1);
  });
});

const useQuery = new QueryClient();

describe("UserList should render correctly for messageUserList", () => {
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
    const userList = render(
      <QueryClientProvider client={useQuery}>
        <UsersList data={Users} messageUserList={true} selectUserList={false} />
      </QueryClientProvider>
    );
    expect(userList).toBeTruthy();
  });

  it("should render UserList correctly", () => {
    const { queryByText } = render(
      <QueryClientProvider client={useQuery}>
        <UsersList data={Users} messageUserList={true} selectUserList={false} />
      </QueryClientProvider>
    );
    expect(queryByText("Josh Lewis")).not.toBeNull();
    expect(queryByText("Amy Lucas")).not.toBeNull();
    expect(queryByText("Landon Clayton")).not.toBeNull();
  });
});
