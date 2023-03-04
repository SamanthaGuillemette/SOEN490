import React from "react";
import { Avatar } from "./Avatar.component";
import { render } from "react-native-testing-library";

describe("The avatar should render correctly", () => {
  it("should render correctly and show name", () => {
    const { queryByText } = render(<Avatar name={"Testing123"} />);
    expect(queryByText("Testing123".charAt(0).toUpperCase())).not.toBeNull(); //Following the same format as line 28 in Avatar.component.tsx
  });
});
