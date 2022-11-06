import { render } from "@testing-library/react-native";
import { Text } from "./Text.component";

// Describe the test group (component)
describe("Testing <Text /> component: ", () => {
  // Describe the test case
  it("renders correctly with text content", () => {
    const textComponent = render(<Text variant="h1">Hello</Text>);
    expect(textComponent.getByText("Hello")).toBeTruthy();
  });
});
