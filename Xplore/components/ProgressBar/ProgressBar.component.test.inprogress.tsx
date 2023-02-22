import React from "react";
import { render } from "react-native-testing-library";
import { colors } from "../../constants";
import ProgressBar from "./ProgressBar.component";

describe("ProgressBar component should render", () => {
  it("should render the progress bar", () => {
    const { queryByText } = render(
      <ProgressBar completionPercentage={10} barColor={"primary"} width={10} />
    );
    expect(queryByText("100")).not.toBeNull();
  });
});
