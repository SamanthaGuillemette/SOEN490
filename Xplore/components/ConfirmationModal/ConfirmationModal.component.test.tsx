import React from "react";
import { ConfirmationModal } from "./ConfirmationModal.component";
import { fireEvent, render } from "@testing-library/react-native";

describe("ConfirmationModalComponent should render correctly", () => {
  const modal = jest.fn();
  it("should render correctly and show Testing123", () => {
    const { queryByText } = render(
      <ConfirmationModal
        primaryText="Testing123"
        secondaryText="SecondaryTest"
        confirmMsg="ConfirmTest"
        setConfirmModalVisible={modal}
      />
    );
    expect(queryByText("Testing123")).not.toBeNull();
    expect(queryByText("SecondaryTest")).not.toBeNull();
    expect(queryByText("ConfirmTest")).not.toBeNull();
  });

  it("should be able to click the primary button", () => {
    const { getByText } = render(
      <ConfirmationModal
        primaryText="Testing123"
        secondaryText="SecondaryTest"
        confirmMsg="ConfirmTest"
        setConfirmModalVisible={modal}
      />
    );
    fireEvent.press(getByText("Testing123"));
    expect(modal).toBeCalledTimes(1);
  });
});
