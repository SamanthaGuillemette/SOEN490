import { cleanup } from "react-native-testing-library";
import renderer from "react-test-renderer";
import React from "react";
import { AvatarGroup } from "./AvatarGroup.component";

afterAll(() => {
  cleanup();
});

describe("AvatarGroup should render correctly", () => {
  it("should render correctly", () => {
    const avatarCount = ["Avatar1", "Avatar2", "Avatar3"];
    const avatars = renderer.create(
      <AvatarGroup usersAvatars={avatarCount} />
    ).toJSON;
    expect(avatars).toMatchSnapshot();
  });
});
