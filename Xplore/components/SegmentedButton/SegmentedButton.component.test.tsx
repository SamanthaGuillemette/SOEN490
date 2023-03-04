import { render } from "react-native-testing-library";
import React from "react";
import { SegmentedButton } from "./SegmentedButton.component";
import { renderHook } from "@testing-library/react-native";

describe("SegmentedButton should render correctly", () => {
  it("should render the labels inputed correctly", () => {
    const { index, setIndex } = renderHook(() => React.useState<number>(1));
    const { queryByText } = render(
      <SegmentedButton labels={["TestSegmentedButton"]} setIndex={index} />
    );
    expect(queryByText("TestSegmentedButton")).not.toBeNull();
  });
});
