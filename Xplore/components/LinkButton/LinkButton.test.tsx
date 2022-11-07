import { fireEvent, render } from "@testing-library/react-native";
import { LinkButton } from "./LinkButton.component";

describe("Unit testing <LinkButton />:", () => {
  const mockFn = jest.fn();

  it("renders correctly", () => {
    const buttonContainer = render(<LinkButton>my link button</LinkButton>);
    expect(buttonContainer).toBeTruthy();
  });

  it("should trigger a function call onPress", () => {
    const buttonContainer = render(
      <LinkButton onPress={mockFn}>my link button</LinkButton>
    );
    const linkButton = buttonContainer.getByText("my link button");
    fireEvent.press(linkButton);
    fireEvent.press(linkButton);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should display correct label", () => {
    const buttonContainer = render(<LinkButton>my link button</LinkButton>);
    const linkButton = buttonContainer.getByText("my link button");
    expect(linkButton.props).toHaveProperty("children", "my link button");
  });
});
