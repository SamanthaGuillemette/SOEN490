import React from "react";
import { render } from "react-native-testing-library";
import { TaskCardSwipeable } from "./TaskCardSwipeable.component";

describe("TaskCardSwipeable should render correctly", () => {
  it("should render correctly", () => {
    const card = render(
      <TaskCardSwipeable
        taskDate="TestDate"
        taskName="TestName"
        taskCategory="TestType"
      />
    );
    expect(card).toBeTruthy();
  });

  it("should render information correctly", () => {
    const { queryByText } = render(
      <TaskCardSwipeable
        taskDate="TestDate"
        taskName="TestName"
        taskCategory="TestType"
      />
    );
    expect(queryByText("TestDate")).not.toBeNull();
    expect(queryByText("TestName")).not.toBeNull();
    expect(queryByText("TestType")).not.toBeNull();
  });
});
