import { RightBubble } from "./RightBubble.component";
import { render } from "@testing-library/react-native";

describe("RightBubble should render", () => {
  it("Should render correctly", () => {
    const { container } = render(
      <RightBubble
        username="TestUser"
        image="https://picsum.photos/200"
        msgTime="5:23PM"
        text="Test123"
      />
    );
    expect(container).toBeTruthy();
  });
});

describe("RightBubble should render the correct info", () => {
  it("should render without any issues", () => {
    const { queryByText } = render(
      <RightBubble
        username="TestUser"
        image="https://picsum.photos/200"
        msgTime="5:23PM"
        text="Test123"
      />
    );
    expect(queryByText("Test123")).not.toBeNull();
    expect(queryByText("5:23PM")).not.toBeNull();
  });
});
