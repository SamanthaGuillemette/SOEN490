import React from "react";
import { render } from "react-native-testing-library";
import ProgressBar from "./ProgressBar.component";

describe("ProgressBar component should render", () => {
  it("should render the progress bar", () => {
    const { queryByTestId } = render(
      <ProgressBar completionPercentage={10} barColor={"primary"} width={10} />
    );
    expect(queryByTestId("1010")).not.toBeNull();
  });
});
