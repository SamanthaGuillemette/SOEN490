import React from "react";
import { cleanup } from "react-native-testing-library";
import { LinearProgressBar } from "./LinearProgressBar.component";
import renderer from "react-test-renderer";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

afterAll(() => {
  cleanup();
});

describe("LinearProgressBar should render", () => {
  it("should render the progress bar", () => {
    const bar = renderer.create(<LinearProgressBar progress={0.2} />);
    expect(bar).toMatchSnapshot();
  });

  it("should render the progress bar with a different color", () => {
    const bar = renderer.create(
      <LinearProgressBar progress={0.2} color={"success"} />
    );
    expect(bar).toMatchSnapshot();
  });
});
