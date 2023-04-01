import React from "react";
import { render } from "react-native-testing-library";
import InputField from "./InputField.component";

const styles = {
  InputField: {
    padding: 1,
    borderRadius: 4,
  },
};

describe("InputField", () => {
  it("should render Testing123", () => {
    const { queryByPlaceholder } = render(
      <InputField placeHolder="Testing123" />
    );
    expect(queryByPlaceholder("Testing123")).not.toBeNull();
  });
});
