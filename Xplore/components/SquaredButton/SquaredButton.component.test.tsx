import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import { SquaredButton } from "./SquaredButton.component";

describe("SquaredButton should render correctly", () => {
  it("should render correctly", () => {
    const button = render(<SquaredButton onPress={""} iconName="arrow-down" />);
    expect(button).toBeTruthy();
  });

  const mockFn = jest.fn();

  it("squared button should be clickable", () => {
    const { getByTestId } = render(
      <SquaredButton onPress={mockFn} iconName="airplay" />
    );
    fireEvent.press(getByTestId("airplay"));
    fireEvent.press(getByTestId("airplay"));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
