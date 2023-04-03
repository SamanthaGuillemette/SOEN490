import { cleanup, fireEvent, render } from "@testing-library/react-native";
import { CategoryModal } from "./CategoryModal.component";

afterEach(() => {
  cleanup();
});

const options = [
  { label: "Meeting", value: "option1" },
  { label: "Planning-Research", value: "option2" },
  { label: "Planning-Budget", value: "option3" },
  { label: "Design-UI design", value: "option4" },
  { label: "Design-Brainstorming", value: "option5" },
  { label: "Development-Frontend", value: "option6" },
  { label: "Development-Backend", value: "option7" },
  { label: "Testing-unit testing", value: "option8" },
  { label: "Testing-System Testing", value: "option9" },
  { label: "Deployment", value: "option10" },
];

const sortedOptions = options.sort((a, b) => a.label.localeCompare(b.label));
const selectedValue = jest.fn();

describe("CategoryModal should render corectly", () => {
  it("should render correctly", () => {
    const { container } = render(
      <CategoryModal
        label="testLabel"
        options={sortedOptions}
        onValueChange={selectedValue}
      />
    );
    expect(container).toBeTruthy();
  });
});

describe("CategoryModal should render the title correctly", () => {
  it("should render the title testLabel", () => {
    const { queryByText } = render(
      <CategoryModal
        label="testLabel"
        options={sortedOptions}
        onValueChange={selectedValue}
      />
    );
    expect(queryByText("testLabel")).not.toBeNull();
  });
});

describe("CategoryModal should render the options correctly", () => {
  it("should render the option labels after opening the modal", () => {
    const { queryByText, getByText } = render(
      <CategoryModal
        label="testLabel"
        options={sortedOptions}
        onValueChange={selectedValue}
      />
    );
    fireEvent.press(getByText("testLabel"));
    expect(queryByText("Meeting")).not.toBeNull();
    expect(queryByText("Planning-Research")).not.toBeNull();
    expect(queryByText("Planning-Budget")).not.toBeNull();
    expect(queryByText("Design-UI design")).not.toBeNull();
    expect(queryByText("Design-Brainstorming")).not.toBeNull();
    expect(queryByText("Development-Frontend")).not.toBeNull();
    expect(queryByText("Development-Backend")).not.toBeNull();
    expect(queryByText("Testing-unit testing")).not.toBeNull();
    expect(queryByText("Testing-System Testing")).not.toBeNull();
    expect(queryByText("Deployment")).not.toBeNull();
  });

  it("should be able to select an option", () => {
    const { queryByText, getByText } = render(
      <CategoryModal
        label="testLabel"
        options={sortedOptions}
        onValueChange={selectedValue}
      />
    );
    fireEvent.press(getByText("testLabel"));
    expect(queryByText("Deployment")).not.toBeNull();
    fireEvent.press(getByText("Deployment"));
    expect(selectedValue).toBeCalledTimes(1);
  });

  it("should be able to close the modal", () => {
    const { getByText } = render(
      <CategoryModal
        label="testLabel"
        options={sortedOptions}
        onValueChange={selectedValue}
      />
    );
    fireEvent.press(getByText("testLabel"));
    fireEvent.press(getByText("CLOSE"));
  });
});
