import { Conversation } from "./Conversation.component";
import { render } from "@testing-library/react-native";

describe("Conversation should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<Conversation />);
    expect(container).toBeTruthy();
  });
});

describe("The correct conversation should be visible", () => {
  it("Should render the example conversation correctly", () => {
    const { queryByText } = render(<Conversation />);
    expect(queryByText("It's Meeee")).not.toBeNull();
  });
});
