import React from "react";
import { CircularPercentageBar } from "./CircularPercentageBar.component";
import { render } from "react-native-testing-library";

describe("CircularPercentageBar should render correctly", () => {
  it("should render correctly with the right percentage", () => {
    const { queryByText } = render(<CircularPercentageBar percentage={35} />);
    expect(queryByText("35%")).not.toBeNull();
  });
});
