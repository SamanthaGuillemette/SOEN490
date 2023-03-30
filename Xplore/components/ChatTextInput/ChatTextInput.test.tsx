import { ChatTextInput } from "./ChatTextInput.component";
import { render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("ChatTextInput should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <ChatTextInput />
      </QueryClientProvider>
    );
    expect(container).toBeTruthy();
  });
});

describe("ChatTextInput textInput should have the placeholder", () => {
  it("should render correctly", () => {
    const { queryByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <ChatTextInput />
      </QueryClientProvider>
    );
    expect(queryByPlaceholderText("Message ...")).not.toBeNull();
  });
});
