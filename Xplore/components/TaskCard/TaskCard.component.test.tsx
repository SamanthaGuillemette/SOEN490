import React from "react";
import { render } from "react-native-testing-library";
import { TaskCard } from "./TaskCard.component";

describe("TaskCard should render correctly", () => {
  it("should render correctly", () => {
    const card = render(
      <TaskCard taskDate="TestDate" taskName="TestName" taskType="TestType" />
    );
    expect(card).toBeTruthy();
  });

  it("should render information correctly", () => {
    const { queryByText } = render(
      <TaskCard taskDate="TestDate" taskName="TestName" taskType="TestType" />
    );
    expect(queryByText("TestDate")).not.toBeNull();
    expect(queryByText("TestName")).not.toBeNull();
    expect(queryByText("TestType")).not.toBeNull();
  });
});
