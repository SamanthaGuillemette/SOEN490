import { render } from "@testing-library/react-native";
import { Text } from "./Text.component";

describe("Testing <Text /> component", () => {
  it("renders correctly", () => {
    const textComponent = render(<Text variant="h1">Hello</Text>);
    expect(textComponent.getByText("Hello")).toBeTruthy();
  });
});
