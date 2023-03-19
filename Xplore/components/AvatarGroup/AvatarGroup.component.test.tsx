import { cleanup } from "react-native-testing-library";
import renderer from "react-test-renderer";
import React from "react";
import { AvatarGroup } from "./AvatarGroup.component";

afterAll(() => {
  cleanup();
});

describe("AvatarGroup should render correctly", () => {
  it("should render less than 4 avatars correctly", () => {
    const avatarCount = ["Avatar1", "Avatar2", "Avatar3", "Avatar4"];
    const avatars = renderer.create(
      <AvatarGroup usersAvatars={avatarCount} />
    ).toJSON;
    expect(avatars).toMatchSnapshot();
  });
});

describe("AvatarGroup should change after rendering more than 4 avatars", () => {
  it("should render less than 5 avatars correctly", () => {
    const avatarCount = ["Avatar1", "Avatar2", "Avatar3", "Avatar4", "Avatar5"];
    const avatars = renderer.create(
      <AvatarGroup usersAvatars={avatarCount} />
    ).toJSON;
    expect(avatars).toMatchSnapshot();
  });
});
