import React from "react";
import { cleanup } from "react-native-testing-library";
import renderer from "react-test-renderer";
import UserAvatar from "./UserAvatar.component";

afterAll(() => {
  cleanup();
});

describe("UserAvatar should render correctly", () => {
  it("should render user avatar correctly", () => {
    const avatar = renderer.create(<UserAvatar index={0} size={135} />).toJSON;
    expect(avatar).toMatchSnapshot();
  });
});
