import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { RequestJoin } from "./RequestJoin.component";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("RequestJoin should render correctly", () => {
  it("should render the request join button", () => {
    const { queryByText } = render(<RequestJoin />);
    expect(queryByText("REQUEST JOIN")).not.toBeNull();
  });

  it("text should change after clicking the join button", () => {
    const { getByText, queryByText } = render(<RequestJoin />);
    fireEvent.press(getByText("REQUEST JOIN"));
    expect(queryByText("REQUEST SENT")).not.toBeNull();
  });
});
