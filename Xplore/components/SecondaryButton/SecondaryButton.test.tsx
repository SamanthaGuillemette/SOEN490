import { fireEvent, render } from "@testing-library/react-native";
import { SecondaryButton } from "./SecondaryButton.component";

describe("Unit testing <SecondaryButton />:", () => {
  const mockFn = jest.fn();

  it("renders correctly", () => {
    const buttonContainer = render(
      <SecondaryButton label="secondary button" />
    );
    expect(buttonContainer).toBeTruthy();
  });

  it("should trigger a function call onPress", () => {
    const buttonContainer = render(
      <SecondaryButton label="secondary button" onPress={mockFn} />
    );
    const secondaryButton = buttonContainer.getByText("secondary button");
    fireEvent.press(secondaryButton);
    fireEvent.press(secondaryButton);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should display correct label", () => {
    const buttonContainer = render(
      <SecondaryButton label="secondary button" />
    );
    const secondaryButton = buttonContainer.getByText("secondary button");
    expect(secondaryButton.props).toHaveProperty(
      "children",
      "secondary button"
    );
  });
});
