import React from "react";
import Icon from "./Icon.component";
import renderer from "react-test-renderer";
import { cleanup, render } from "react-native-testing-library";
import { Platform } from "react-native";

afterAll(() => {
  cleanup();
});

const setPlatform = function (platform: "android" | "ios") {
  Object.defineProperty(Platform, "OS", {
    get: jest.fn(() => platform),
  });
};

describe("Icon component", () => {
  it("should render icon correctly", () => {
    const icon = renderer.create(
      <Icon name={"award"} color="primary" />
    ).toJSON;
    expect(icon).toMatchSnapshot();
  });
});

describe("Icon component should render the correct icon", () => {
  it("should render the inputed icon correctly", () => {
    const { queryByTestId } = render(<Icon name={"award"} color="primary" />);
    expect(queryByTestId("award")).not.toBeNull();
  });
});

describe("Icon component should render a custom color", () => {
  it("should render the inputed icon correctly", () => {
    const { queryByTestId } = render(
      <Icon name={"award"} customColor="blue" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });
});

describe("Icon component should render custom sizes for iOS", () => {
  it("should render a small icon", () => {
    setPlatform("ios");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="small" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });

  it("should render a medium icon", () => {
    setPlatform("ios");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="medium" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });

  it("should render a large icon", () => {
    setPlatform("ios");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="large" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });

  it("should render a x-large icon", () => {
    setPlatform("ios");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="x-large" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });
});

describe("Icon component should render custom sizes for android", () => {
  it("should render a small icon", () => {
    setPlatform("android");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="small" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });

  it("should render a medium icon", () => {
    setPlatform("android");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="medium" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });

  it("should render a large icon", () => {
    setPlatform("android");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="large" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });

  it("should render a x-large icon", () => {
    setPlatform("android");
    const { queryByTestId } = render(
      <Icon name={"award"} color="primary" size="x-large" />
    );
    expect(queryByTestId("award")).not.toBeNull();
  });
});
