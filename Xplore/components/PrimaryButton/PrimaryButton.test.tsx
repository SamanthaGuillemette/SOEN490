import { fireEvent, render } from "@testing-library/react-native";
import { PrimaryButton } from "./PrimaryButton.component";

describe("Unit testing <PrimaryButton />:", () => {
  const mockFn = jest.fn();

  it("renders correctly", () => {
    const buttonContainer = render(<PrimaryButton label="primaryButton" />);
    expect(buttonContainer).toBeTruthy();
  });

  it("should trigger a function call onPress", () => {
    const buttonContainer = render(
      <PrimaryButton label="primaryButton" onPress={mockFn} />
    );
    const primaryButton = buttonContainer.getByText("primaryButton");
    fireEvent.press(primaryButton);
    fireEvent.press(primaryButton);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should display correct label", () => {
    const buttonContainer = render(<PrimaryButton label="primaryButton" />);
    const primaryButton = buttonContainer.getByText("primaryButton");
    expect(primaryButton.props).toHaveProperty("children", "primaryButton");
  });
});
