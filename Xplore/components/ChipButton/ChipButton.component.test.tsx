import React from "react";
import { ChipButton } from "./ChipButton.component";
import { render } from "react-native-testing-library";

describe("ChipButton should render correctly", () => {
  it("should render correctly", () => {
    const { queryByText } = render(<ChipButton label={"Testing123"} />);
    expect(queryByText("Testing123")).not.toBeNull();
  });
});
