import { Conversation } from "./Conversation.component";
import { cleanup, render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { useListMessages } from "../../services/api/chatMessages";

const useQuery = new QueryClient();
jest.mock("../../services/api/chatMessages", () => ({
  useListMessages: jest.fn(),
}));

afterEach(() => {
  cleanup();
});

describe("Conversation should render correctly", () => {
  it("should render correctly", () => {
    useListMessages.mockReturnValue({
      messages: [
        {
          id: "1",
          user: "left",
          text: "hello",
          image: "https://picsum.photos/200",
        },
        {
          id: "2",
          user: "left",
          text: "It's Meeee",
          image: "https://picsum.photos/200",
        },
      ],
    });
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
    const { queryByText } = render(
      <QueryClientProvider client={useQuery}>
        <Conversation chatID="12345" />
      </QueryClientProvider>
    );
    expect(queryByText("Testing123")).not.toBeNull();
  });
});
