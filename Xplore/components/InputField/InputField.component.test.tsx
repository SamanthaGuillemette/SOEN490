import React from "react";
import { render } from "react-native-testing-library";
import InputField from "./InputField.component";
import styles from "../../features/Profile/components/settings-components/EditBox.styles";

describe("InputField", () => {
  it("should render Testing123", () => {
    const { queryByPlaceholder } = render(
      <InputField placeHolder="Testing123" style={styles.InputField} />
    );
    expect(queryByPlaceholder("Testing123")).not.toBeNull();
  });
});
