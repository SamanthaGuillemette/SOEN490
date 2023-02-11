import React from "react";
import { render } from "react-native-testing-library";
import InputField from "./InputField.component";
import styles from "../../features/Profile/components/settings-components/EditBox.styles";
import { colors } from "../../constants";

describe("InputField", () => {
  it("should render Testing123", () => {
    const { queryByText } = render(
      <InputField
        lightTextColor="titleText"
        lightBorderColor={colors.light.backgroundSecondary}
        style={styles.InputField}
      >
        Testing123
      </InputField>
    );
    expect(queryByText("Testing123")).not.toBeNull();
  });
});
