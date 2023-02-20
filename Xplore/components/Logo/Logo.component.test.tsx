import React from "react";
import { cleanup } from "react-native-testing-library";
import { Logo } from "./Logo.component";
import renderer from "react-test-renderer";

afterAll(() => {
  cleanup();
});

describe("Logo should render correctly", () => {
  it("should render correctly", () => {
    const logo = renderer.create(<Logo />).toJSON;
    expect(logo).toMatchSnapshot();
  });
});
