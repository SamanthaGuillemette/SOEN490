import React from "react";
import { render } from "react-native-testing-library";
import { SaveButton } from "./SaveButton.component";

describe("SaveButton should render correctly", () => {
  it("should render the text next ", () => {
    const { queryByText } = render(<SaveButton />);
    expect(queryByText("SAVE")).not.toBeNull();
  });
});
