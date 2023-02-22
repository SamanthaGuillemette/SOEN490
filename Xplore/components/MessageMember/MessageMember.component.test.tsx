import { render } from "react-native-testing-library";
import React from "react";
import Member from "./MessageMember.component";

describe("Member should render correctly", () => {
  it("should render correctly with the username", () => {
    const { queryByText } = render(
      <Member avatar="TestAvatar" username="TestUsername" xp={20} />
    );
    expect(queryByText("TestUsername")).not.toBeNull();
  });
});
