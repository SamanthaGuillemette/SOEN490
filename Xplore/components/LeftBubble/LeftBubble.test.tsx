import { LeftBubble } from "./LeftBubble.component";
import { render } from "@testing-library/react-native";

describe("LeftBubble should render", () => {
  it("should render without any issues", () => {
    const { container } = render(
      <LeftBubble
        username="TestUser"
        image="https://picsum.photos/200"
        msgTime="5:23PM"
        text="Test123"
      />
    );
    expect(container).toBeTruthy();
  });
});

describe("LeftBubble should render the correct info", () => {
  it("should render without any issues", () => {
    const { queryByText } = render(
      <LeftBubble
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
