import React from "react";
import { AlertModal } from "./AlertModal.component";
import { render } from "react-native-testing-library";
import { fireEvent } from "@testing-library/react-native";

describe("Check if alert modal works as intended", () => {
  it("Alert modal should work and show Testing123", () => {
    const modal = jest.fn();
    const { queryByText, getByText } = render(
      <AlertModal alertMsg="Testing123" setAlertModalVisible={modal} /> //Need help with setAlertModalVisible
    );
    expect(queryByText("Testing123")).not.toBeNull();
    fireEvent.press(getByText("Done"));
    expect(modal).toBeCalledTimes(1);
  });
});
