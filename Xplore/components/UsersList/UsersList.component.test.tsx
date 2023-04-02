import { render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersList } from "./UsersList.component";
import { NavigationProp } from "@react-navigation/native";

const useQuery = new QueryClient();

describe("UserList should render correctly for selectUserList", () => {
  interface UsersType {
    id: string;
    username: string;
    avatar: string;
    xp: number;
    selected?: boolean;
    navigation?: NavigationProp<any>;
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
        <UsersList data={Users} messageUserList={false} selectUserList={true} />
      </QueryClientProvider>
    );
    expect(userList).toBeTruthy();
  });

  it("should render UserList correctly", () => {
    const { queryByText } = render(
      <QueryClientProvider client={useQuery}>
        <UsersList data={Users} messageUserList={false} selectUserList={true} />
      </QueryClientProvider>
    );
    expect(queryByText("Josh Lewis")).not.toBeNull();
    expect(queryByText("Amy Lucas")).not.toBeNull();
    expect(queryByText("Landon Clayton")).not.toBeNull();
  });
});

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
