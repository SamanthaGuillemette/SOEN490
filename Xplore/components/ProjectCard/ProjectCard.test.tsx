import { fireEvent, render } from "@testing-library/react-native";
import { ProjectCard } from "./ProjectCard.component";

describe("ProjectCard", () => {
  const navigation = { navigate: jest.fn() };
  const item = {
    name: "testName",
    description: "testDescription",
    percentComplete: 1,
    imageURL: "testImage",
  };
  const item2 = {
    name: "testName",
    description: "testDescription",
    percentComplete: 1,
    imageURL: "testImage",
  };
  it("Should render without any issues", () => {
    const { container } = render(
      <ProjectCard navigation={navigation} item={item} />
    );
    expect(container).toBeTruthy();
  });

  it("Should render name and description correctly", () => {
    const { queryByText } = render(
      <ProjectCard navigation={navigation} item={item} />
    );
    expect(queryByText("testName")).not.toBeNull();
    expect(queryByText("testDescription")).not.toBeNull();
  });

  it("Should be able to click on project name", () => {
    const { getByText } = render(
      <ProjectCard navigation={navigation} item={item2} />
    );
    fireEvent.press(getByText("testName"));
    expect(navigation.navigate).toBeCalledTimes(1);
  });
});
