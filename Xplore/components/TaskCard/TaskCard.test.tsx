import { fireEvent, render } from "@testing-library/react-native";
import { TaskCard } from "../TaskCard/TaskCard.component";

const taskInfo = {
  category: "Meeting",
  completed: false,
  description: "Meeting to stop",
  endDate: "2023-03-29T00:00:00.000+00:00",
  name: "Meeting",
  startDate: "2023-03-29T00:00:00.000+00:00",
  taskID: "testTaskId",
};

const navigation = { navigate: jest.fn() };

describe("TaskCard should render correctly", () => {
  it("should render correctly", () => {
    const card = render(
      <TaskCard taskInfo={taskInfo} navigation={navigation} />
    );
    expect(card).toBeTruthy();
  });
});

describe("TaskCard should be interactable", () => {
  it("should be clickable", async () => {
    const { findAllByText } = render(
      <TaskCard taskInfo={taskInfo} navigation={navigation} />
    );
    expect(await findAllByText("Meeting")).toHaveLength(2);
    fireEvent.press((await findAllByText("Meeting"))[0]);
    expect(navigation.navigate).toBeCalledTimes(1);
  });
});
