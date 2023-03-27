import { MembersActionsModal } from "./MembersActionsModal.component";
import { render } from "react-native-testing-library";
import { renderHook } from "@testing-library/react-native";
import React from "react";

const { modalVisible, setModalVisible } = renderHook(() =>
  React.useState<Boolean>(true)
);

describe("AddMemberModalComponent Renders", () => {
  it("renders the modal component", () => {
    render(<MembersActionsModal setActionsModalVisible={modalVisible} />);
  });
});

describe("AddMemberModal should have appropriate texts", () => {
  it("Should render 'Add new members' as well as two buttons", () => {
    const { queryByText } = render(
      <MembersActionsModal setActionsModalVisible={modalVisible} />
    );
    expect(queryByText("Add new members")).not.toBeNull();
    expect(queryByText("ADD")).not.toBeNull();
    expect(queryByText("Cancel")).not.toBeNull();
  });
});
