import React from "react";
import { ConfirmationModal } from "./ConfirmationModal.component";
import { render } from "react-native-testing-library";
import { renderHook } from "@testing-library/react-native";

describe("ConfirmationModalComponent should render correctly", () => {
  it("should render correctly and show Testing123", () => {
    const { modalVisible, setModalVisible } = renderHook(() =>
      React.useState<Boolean>(true)
    );
    const { queryByText } = render(
      <ConfirmationModal
        primaryText="Testing123"
        secondaryText="SecondaryTest"
        confirmMsg="ConfirmTest"
        setConfirmModalVisible={modalVisible}
      />
    );
    expect(queryByText("Testing123")).not.toBeNull();
    expect(queryByText("SecondaryTest")).not.toBeNull();
    expect(queryByText("ConfirmTest")).not.toBeNull();
  });
});
