import { render } from "@testing-library/react-native";
import { Text } from "./Text.component";

// Describe the test group (component)
describe("Testing <Text /> component", () => {
  // Describe the test case
  it("renders correctly", () => {
    const textComponent = render(<Text variant="h1">Hello</Text>);
    expect(textComponent.getByText("Hello")).toBeTruthy();
  });

  // You can have multiple test cases here:
  // it("test case name", () => {
  //   Your test code...
  // })

  // You can also choose the word "test" instead of "it":
  // test("test case name", () => {
  //   Your test code...
  // })
});
