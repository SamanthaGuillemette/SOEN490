import { MemberChipAdder } from "./MemberChipAdder.component";
import { fireEvent, render } from "@testing-library/react-native";

describe("MemberChipAdder component should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<MemberChipAdder />);
    expect(container).toBeTruthy();
  });
});

describe("MemberChipAdder component should render the plus icon", () => {
  it("should have a plus icon", () => {
    const { queryByTestId } = render(<MemberChipAdder />);
    expect(queryByTestId("plus")).not.toBeNull();
  });
});

describe("MemberChipAdder component should render the add member modal", () => {
  it("should render the add member modal after clicking the plus icon", () => {
    const { getByTestId, queryByText } = render(<MemberChipAdder />);
    expect(queryByText("Add new members")).toBeNull();
    expect(queryByText("ADD")).toBeNull();
    expect(queryByText("Cancel")).toBeNull();
    fireEvent.press(getByTestId("plus"));
    expect(queryByText("Add new members")).not.toBeNull();
    expect(queryByText("ADD")).not.toBeNull();
    expect(queryByText("Cancel")).not.toBeNull();
  });
});
