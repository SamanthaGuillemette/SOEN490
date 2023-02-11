import { fireEvent, render } from "react-native-testing-library";
import React from "react";
import { TextButton } from "./TextButton.component";

describe("TextButton should render correctly", () => {
  it("should render correctly", () => {
    const button = render(<TextButton children="TestChildren" />);
    expect(button).toBeTruthy();
  });

  it("should render the children properly", () => {
    const { queryByText } = render(<TextButton children="TestChildren" />);
    expect(queryByText("TestChildren")).not.toBeNull();
  });

  const mockFn = jest.fn();

  it("Should be clickable", () => {
    const { getByText } = render(
      <TextButton children="TestChildren" onPress={mockFn} />
    );
    fireEvent.press(getByText("TestChildren"));
    fireEvent.press(getByText("TestChildren"));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
