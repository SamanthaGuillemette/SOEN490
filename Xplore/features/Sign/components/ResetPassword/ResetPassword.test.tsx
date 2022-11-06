// Hello.spec.js
import React from "react";
import { render } from "react-native-testing-library";
import ResetPassword from "./ResetPassword.screen";

describe("renders title", () => {
  it("renders the correct screen title", () => {
    const { queryByText } = render(<ResetPassword />);
    expect(queryByText("Reset password")).not.toBeNull();
  });
});

describe("renders password input boxes", () => {
  it("renders the 'password' input box", () => {
    const { queryByPlaceholder } = render(<ResetPassword />);
    expect(queryByPlaceholder("Password")).not.toBeNull();
  });

  it("renders the 'Re-enter password' input box", () => {
    const { queryByPlaceholder } = render(<ResetPassword />);
    expect(queryByPlaceholder("Re-enter password")).not.toBeNull();
  });
});

describe("renders the reset button", () => {
  it("renders the correct button text", () => {
    const { queryByText } = render(<ResetPassword />);
    expect(queryByText("RESET PASSWORD")).not.toBeNull();
  });
});
