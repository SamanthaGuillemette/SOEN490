import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import Accordion from "./Accordion.component";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Accordion Component Renders", () => {
  it("renders accordion", () => {
    const { queryByText } = render(<Accordion />);
    expect(queryByText("About")).not.toBeNull();
    expect(queryByText("Technologies")).not.toBeNull();
    expect(queryByText("Goals")).not.toBeNull();
  });
});

describe("Accordion Component Opens", () => {
  it("Opens accordion for Goals", () => {
    const { getByText, queryByText } = render(<Accordion />);
    // expect(queryByText("About accordion tab \n")).toBeNull();
    fireEvent.press(getByText("Goals"));
    expect(queryByText("Goals accordion tab \n")).toBeNull();
  });
});
