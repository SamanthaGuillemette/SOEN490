import React from "react";
import { AddButton } from "./AddButton.component";
import { render, fireEvent } from "react-native-testing-library";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Add Button Component Renders", () => {
  it("should render button properly", () => {
    const button = render(<AddButton />);
    expect(button).toBeTruthy();
  });

  it("Press and Render Button", () => {
    const { getByText } = render(<AddButton />);
    fireEvent.press(getByText("ADD"));
  });
});
