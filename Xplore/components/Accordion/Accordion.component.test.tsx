import React from "react";
import { Platform } from "react-native";
import { fireEvent, render } from "react-native-testing-library";
import Accordion from "./Accordion.component";

const setPlatform = function (platform: "android" | "ios") {
  Object.defineProperty(Platform, "OS", {
    get: jest.fn(() => platform),
  });
};

let item = {
  $collectionId: "testCollectionID",
  $createdAt: "2023-03-27T02:52:04.546+00:00",
  $databaseId: "testDatabaseId",
  $id: "testId",
  $permissions: [
    'read("user:testUser")',
    'update("user:testUser")',
    'delete("user:testUser")',
  ],
  $updatedAt: "2023-03-27T02:55:17.687+00:00",
  category: "Test Category",
  description: "Test Description",
  endDate: "2023-03-27T02:52:04.548+00:00",
  goals: ["Stop", "Everything ", "In sigh"],
  imageURL: "testImage",
  members: ["testUser", "testUser2", "testUser3"],
  name: "Spotify ",
  percentComplete: 0,
  projectOwner: "testUser",
  requestJoin: true,
  startDate: "2023-03-27T02:52:04.548+00:00",
  tasks: ["testTask"],
};

describe("Accordion Component Renders", () => {
  it("renders accordion", () => {
    setPlatform("android");
    const { queryByText } = render(<Accordion item={item} />);
    expect(queryByText("About")).not.toBeNull();
    expect(queryByText("Category")).not.toBeNull();
    expect(queryByText("Goals")).not.toBeNull();
  });
});

describe("Accordion Component Opens About", () => {
  it("Opens accordion for About and display the correct description", () => {
    const { getByText, queryByText } = render(<Accordion item={item} />);
    fireEvent.press(getByText("About"));
    expect(queryByText("Test Description \n")).toBeNull();
  });
});

describe("Accordion Component Opens Category", () => {
  it("Opens accordion for Category and display the correct description", () => {
    const { getByText, queryByText } = render(<Accordion item={item} />);
    fireEvent.press(getByText("Goals"));
    expect(queryByText("Test Category\n")).toBeNull();
  });
});

describe("Accordion Component Opens Goals", () => {
  it("Opens accordion for Category and display the correct description", () => {
    const { getByText, queryByText } = render(<Accordion item={item} />);
    fireEvent.press(getByText("Goals"));
    expect(queryByText("Stop\n")).toBeNull();
  });
});
