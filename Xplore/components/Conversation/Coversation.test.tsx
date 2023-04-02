import { Conversation } from "./Conversation.component";
import { cleanup, render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { useListMessages } from "../../services/api/chatMessages";

const useQuery = new QueryClient();
jest.mock("../../services/api/chatMessages", () => ({
  useListMessages: jest.fn(),
}));
jest.mock("../../services/appwrite/api", () => ({
  getAccount: jest.fn().mockReturnValue("12345"),
}));

afterEach(() => {
  cleanup();
});

useListMessages.mockReturnValue([
  {
    data: [
      {
        id: "1",
        chatID: "12345",
        userID: "12345",
        message: "hello",
        username: "testuser1",
      },
      {
        id: "2",
        chatID: "12345",
        userID: "12345",
        message: "Testing123",
        username: "testuser2",
      },
    ],
    title: "2023-03-19",
  },
]);

describe("Conversation should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(
      <QueryClientProvider client={useQuery}>
        <Conversation chatID="12345" />
      </QueryClientProvider>
    );
    expect(container).toBeTruthy();
  });
});

describe("The correct conversation should be visible", () => {
  it("Should render the example conversation correctly", () => {
    const { queryByText } = render(
      <QueryClientProvider client={useQuery}>
        <Conversation chatID="12345" />
      </QueryClientProvider>
    );
    expect(queryByText("Testing123")).not.toBeNull();
  });
});
