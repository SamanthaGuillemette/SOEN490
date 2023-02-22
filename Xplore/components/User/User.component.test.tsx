import { render } from "react-native-testing-library";
import React from "react";
import { User } from "./User.component";

describe("User should render correctly", () => {
  it("should render user corectly", () => {
    const user = render(
      <User avatar="TestAvatar" username="TestUsername" xp={5} />
    );
    expect(user).toBeTruthy();
  });

  it("should render given information correctly", () => {
    const { queryByText } = render(
      <User avatar="TestAvatar" username="TestUsername" xp={5} />
    );
    expect(queryByText("TestUsername")).not.toBeNull();
    expect(queryByText("5 XP")).not.toBeNull();
  });
});
