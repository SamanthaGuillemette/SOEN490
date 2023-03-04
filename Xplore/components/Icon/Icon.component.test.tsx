import React from "react";
import Icon from "./Icon.component";
import renderer from "react-test-renderer";
import { cleanup } from "react-native-testing-library";

afterAll(() => {
  cleanup();
});

describe("Icon component", () => {
  it("should render icon correctly", () => {
    const icon = renderer.create(
      <Icon name={"award"} color="primary" />
    ).toJSON;
    expect(icon).toMatchSnapshot();
  });
});
