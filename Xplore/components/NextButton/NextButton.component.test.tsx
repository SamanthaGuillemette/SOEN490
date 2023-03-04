import React from "react";
import { render } from "react-native-testing-library";
import { NextButton } from "./NextButton.component";

describe("NextButton should render correctly", () => {
  it("should render the text next ", () => {
    const { queryByText } = render(<NextButton />);
    expect(queryByText("NEXT")).not.toBeNull();
  });
});
