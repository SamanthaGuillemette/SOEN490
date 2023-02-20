import React from "react";
import { AlertModal } from "./AlertModal.component";
import { render } from "react-native-testing-library";
import { renderHook } from "@testing-library/react-native";

describe("Check if alert modal works as intended", () => {
  it("Alert modal should work and show Testing123", () => {
    const { modalVisible, setModalVisible } = renderHook(() =>
      React.useState<Boolean>()
    );
    const { queryByText } = render(
      <AlertModal alertMsg="Testing123" setAlertModalVisible={modalVisible} /> //Need help with setAlertModalVisible
    );
    expect(queryByText("Testing123")).not.toBeNull();
  });
});
