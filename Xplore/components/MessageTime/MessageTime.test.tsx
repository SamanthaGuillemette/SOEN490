import { MessageTime } from "./MessageTime.component";
import { render } from "@testing-library/react-native";

describe("MessageTime should render", () => {
  it("should render correctly", () => {
    const { container } = render(<MessageTime time={"1:23PM"} />);
    expect(container).toBeTruthy();
  });
});

describe("MessageTime should render the right time", () => {
  it("should render 1:23PM", () => {
    const { queryByText } = render(<MessageTime time={"1:23PM"} />);
    expect(queryByText("1:23PM")).not.toBeNull();
  });
});
