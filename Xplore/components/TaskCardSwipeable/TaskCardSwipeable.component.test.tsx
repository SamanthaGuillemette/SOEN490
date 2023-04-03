import { TaskCardSwipeable } from "./TaskCardSwipeable.component";
import { fireEvent, render } from "@testing-library/react-native";
import * as project from "../../services/api/projects";

const taskInfo = {
  category: "Meeting",
  completed: false,
  description: "Meeting to stop",
  endDate: "2023-03-29T00:00:00.000+00:00",
  name: "Meeting",
  startDate: "2023-03-29T00:00:00.000+00:00",
  taskID: "testTaskId",
};

const tasks = [
  {
    category: "Meeting",
    completed: false,
    description: "Meeting to stop",
    endDate: "2023-03-29T00:00:00.000+00:00",
    name: "Meeting",
    startDate: "2023-03-29T00:00:00.000+00:00",
    taskID: "testTaskId",
  },
  {
    category: "Meeting",
    completed: false,
    description: "Meeting to stop",
    endDate: "2023-03-29T00:00:00.000+00:00",
    name: "Meeting",
    startDate: "2023-03-29T00:00:00.000+00:00",
    taskID: "testTaskId",
  },
  {
    category: "Meeting",
    completed: false,
    description: "Meeting to stop",
    endDate: "2023-03-29T00:00:00.000+00:00",
    name: "Meeting",
    startDate: "2023-03-29T00:00:00.000+00:00",
    taskID: "testTaskId",
  },
];
const navigation = { navigate: jest.fn() };

describe("TaskCardSwipable should render", () => {
  it("should render correctly", () => {
    const { container } = render(
      <TaskCardSwipeable navigation={navigation} taskInfo={taskInfo} />
    );
    expect(container).toBeTruthy();
  });
});

describe("TaskCardSwipable should be interactable", () => {
  it("should be able to click check-square", () => {
    const setTasks = jest.fn();
    const { getByTestId } = render(
      <TaskCardSwipeable
        navigation={navigation}
        taskInfo={taskInfo}
        setTasks={setTasks}
        tasks={tasks}
      />
    );
    fireEvent.press(getByTestId("check-square"));
    expect(setTasks).toBeCalledTimes(1);
  });

  it("should be able to click trash-2", () => {
    const setTasks = jest.fn();
    const { getByTestId } = render(
      <TaskCardSwipeable
        navigation={navigation}
        taskInfo={taskInfo}
        setTasks={setTasks}
        tasks={tasks}
      />
    );
    fireEvent.press(getByTestId("trash-2"));
    expect(setTasks).toBeCalledTimes(1);
  });

  it("should be able to click trash-2 for allowCompleteTask", () => {
    const setTasks = jest.fn();
    const { getByTestId } = render(
      <TaskCardSwipeable
        navigation={navigation}
        taskInfo={taskInfo}
        setTasks={setTasks}
        tasks={tasks}
        allowCompleteTask={false}
      />
    );
    fireEvent.press(getByTestId("trash-2"));
    expect(setTasks).toBeCalledTimes(1);
  });

  it("should be able to delete task for project ID", () => {
    const setTasks = jest.fn();
    const projectSpy = jest.spyOn(project, "deleteTask").mockResolvedValue();
    const { getByTestId } = render(
      <TaskCardSwipeable
        navigation={navigation}
        taskInfo={taskInfo}
        setTasks={setTasks}
        tasks={tasks}
        allowCompleteTask={false}
        projectID={"12345"}
      />
    );
    fireEvent.press(getByTestId("trash-2"));
    expect(setTasks).toBeCalledTimes(1);
    expect(projectSpy).toBeCalledTimes(1);
  });
});
