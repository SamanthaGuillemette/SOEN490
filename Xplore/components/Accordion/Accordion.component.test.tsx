import React from "react";
import { Platform } from "react-native";
import { fireEvent, render } from "react-native-testing-library";
import Accordion from "./Accordion.component";

const setPlatform = function (platform: "android" | "ios") {
  Object.defineProperty(Platform, "OS", {
    get: jest.fn(() => platform),
  });
};

describe("Accordion Component Renders", () => {
  it("renders accordion", () => {
    setPlatform("android");
    const { queryByText } = render(<Accordion />);
    expect(queryByText("About")).not.toBeNull();
    expect(queryByText("Technologies")).not.toBeNull();
    expect(queryByText("Goals")).not.toBeNull();
  });
});

describe("Accordion Component Opens", () => {
  it("Opens accordion for Goals", () => {
    const { getByText, queryByText } = render(<Accordion />);
    fireEvent.press(getByText("Goals"));
    expect(queryByText("Goals accordion tab \n")).toBeNull();
  });
});
