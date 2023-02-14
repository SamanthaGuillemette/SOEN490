import React from "react";
import Button from "./Button.component";
import { render } from "react-native-testing-library";

describe("Button should render correctly", () => {
  it("should render correctly with 'Hello'", () => {
    const { queryByText } = render(
      <Button
        children="Hello"
        backgroundColor="primary"
        textColor="titleText"
      />
    );
    expect(queryByText("Hello")).not.toBeNull();
  });
});
