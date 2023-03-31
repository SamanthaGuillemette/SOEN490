import { ChatTextInput } from "./ChatTextInput.component";
import { fireEvent, render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import * as chat from "../../services/api/chatMessages";

const queryClient = new QueryClient();

describe("ChatTextInput should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <ChatTextInput chatID="testChatID" chatType="group" />
      </QueryClientProvider>
    );
    expect(container).toBeTruthy();
  });
});

describe("ChatTextInput textInput should have the placeholder", () => {
  it("should render correctly", () => {
    const { queryByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <ChatTextInput chatID="testChatID" chatType="group" />
      </QueryClientProvider>
    );
    expect(queryByPlaceholderText("Message ...")).not.toBeNull();
  });
});

describe("ChatTextInput textInput should be inputable", () => {
  it("should be able to enter and send text", async () => {
    const mockFn = jest.spyOn(chat, "createMessage");
    const { getByPlaceholderText, findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ChatTextInput chatID="testChatID" chatType="group" />
      </QueryClientProvider>
    );
    fireEvent.changeText(
      getByPlaceholderText("Message ..."),
      "This is a message"
    );
    fireEvent.press(await findByTestId("send"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
