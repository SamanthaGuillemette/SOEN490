import React from "react";
import { Avatar } from "./Avatar.component";
import { render } from "react-native-testing-library";

describe("The avatar should render correctly", () => {
  it("should render correctly and show name", () => {
    const { queryByText } = render(<Avatar name={"Testing123"} />);
    expect(queryByText("Testing123".charAt(0).toUpperCase())).not.toBeNull(); //Following the same format as line 28 in Avatar.component.tsx
  });
});

describe("The avatar group chat should render correctly", () => {
  it("should render the test id for the groupchat icon", async () => {
    const { findByTestId } = render(
      <Avatar name={"Testing123"} groupChat={true} />
    );
    expect(await findByTestId("users")).not.toBeNull();
  });
});

describe("The avatar count should render correctly", () => {
  it("should render the avatar count accurately", () => {
    const { queryByText } = render(
      <Avatar name={"Testing123"} avatarCount={25} />
    );
    expect(queryByText("+25")).not.toBeNull();
  });
});

describe("The avatar image should render correctly", () => {
  it("should render the avatar image correctly", async () => {
    let baseUrl = "https://picsum.photos";
    let url = new URL("/200", baseUrl);
    const { findByTestId } = render(
      <Avatar name={"Testing123"} imageURL={url} />
    );
    expect(await findByTestId("https://picsum.photos/200")).not.toBeNull();
  });
});
