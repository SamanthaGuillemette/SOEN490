import { TaskModal } from "./TaskModal.component";
import { fireEvent, render } from "@testing-library/react-native";

const tasks = [
  {
    category: "Meeting1",
    completed: false,
    description: "Meeting to stop",
    endDate: "2023-03-29T00:00:00.000+00:00",
    name: "Meeting",
    startDate: "2023-03-29T00:00:00.000+00:00",
    taskID: "testTaskId",
  },
  {
    category: "Meeting2",
    completed: false,
    description: "Meeting to stop",
    endDate: "2023-03-29T00:00:00.000+00:00",
    name: "Meeting",
    startDate: "2023-03-29T00:00:00.000+00:00",
    taskID: "testTaskId",
  },
  {
    category: "Meeting3",
    completed: false,
    description: "Meeting to stop",
    endDate: "2023-03-29T00:00:00.000+00:00",
    name: "Meeting",
    startDate: "2023-03-29T00:00:00.000+00:00",
    taskID: "testTaskId",
  },
];

describe("TaskModal should render", () => {
  it("should render without any problems", () => {
    const onPress = jest.fn();
    const setTasks = jest.fn();
    const { container } = render(
      <TaskModal onPress={onPress} setTasks={setTasks} tasks={tasks} />
    );
    expect(container).toBeTruthy();
  });

  it("should have all components", () => {
    const onPress = jest.fn();
    const setTasks = jest.fn();
    const { queryByPlaceholderText, queryByTestId, queryByText } = render(
      <TaskModal onPress={onPress} setTasks={setTasks} tasks={tasks} />
    );
    expect(queryByPlaceholderText("Task name")).not.toBeNull();
    expect(queryByPlaceholderText("Task description")).not.toBeNull();
    expect(queryByTestId("plus")).not.toBeNull();
    expect(queryByText("CANCEL")).not.toBeNull();
  });

  it("should be able to function", () => {
    const onPress = jest.fn();
    const setTasks = jest.fn();
    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
      getAllByTestId,
      getAllByText,
    } = render(
      <TaskModal onPress={onPress} setTasks={setTasks} tasks={tasks} />
    );
    fireEvent.changeText(getByPlaceholderText("Task name"), "testName");
    fireEvent.changeText(
      getByPlaceholderText("Task description"),
      "testDescription"
    );
    fireEvent.press(getByTestId("plus"));
    fireEvent.press(getByText("CANCEL"));
    fireEvent.press(getAllByTestId("calendar")[0]);
    fireEvent.press(getByText("10"));
    fireEvent.press(getByText("Ok"));
    fireEvent.press(getAllByTestId("calendar")[1]);
    fireEvent.press(getAllByText("15")[1]);
    fireEvent.press(getAllByText("Ok")[1]);
    expect(onPress).toBeCalledTimes(1);
  });
});
