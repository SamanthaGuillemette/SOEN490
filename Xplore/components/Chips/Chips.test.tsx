import { Chips } from "./Chips.component";
import { render } from "@testing-library/react-native";

describe("Chips should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<Chips placeHolder="Testing123" />);
    expect(container).toBeTruthy();
  });
});

describe("Chips should render the placeholder correctly", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText } = render(<Chips placeHolder="Testing123" />);
    expect(getByPlaceholderText("Testing123")).not.toBeNull();
  });
});
