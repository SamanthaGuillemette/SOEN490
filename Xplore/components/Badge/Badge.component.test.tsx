import React from "react";
import Badge from "./Badge.component";
import { render } from "react-native-testing-library";

describe("BadgeComponent should render", () => {
  it("should render properly", () => {
    render(<Badge index={1} />);
  });
});
