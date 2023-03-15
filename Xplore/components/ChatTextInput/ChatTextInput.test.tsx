import { ChatTextInput } from "./ChatTextInput.component";
import { render } from "@testing-library/react-native";

describe("ChatTextInput should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<ChatTextInput />);
    expect(container).toBeTruthy();
  });
});

describe("ChatTextInput textInput should have the placeholder", () => {
  it("should render correctly", () => {
    const { queryByPlaceholderText } = render(<ChatTextInput />);
    expect(queryByPlaceholderText("Message ...")).not.toBeNull();
  });
});
