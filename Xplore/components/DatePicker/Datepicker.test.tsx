import { DatePicker } from "./DatePicker.component";
import { render, fireEvent } from "@testing-library/react-native";

const setDate = jest.fn();

describe("DatePicker should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(
      <DatePicker title="TestDate" setDate={setDate} />
    );
    expect(container).toBeTruthy();
    expect(setDate).toBeCalledTimes(0);
  });
});

describe("DatePicker Title should appear correctly", () => {
  it("The title TestDate should appear", () => {
    const { queryByText } = render(
      <DatePicker title="TestDate" setDate={setDate} />
    );
    expect(queryByText("TestDate")).not.toBeNull();
    expect(setDate).toBeCalledTimes(0);
  });
});

describe("DatePicker should be clickable", () => {
  it("Should open the date picker when clicked on", () => {
    const { getByTestId, queryByText } = render(
      <DatePicker title="TestDate" setDate={setDate} />
    );
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    expect(queryByText("Cancel")).not.toBeNull();
    expect(queryByText("Ok")).not.toBeNull();
    expect(setDate).toBeCalledTimes(0);
  });
});

describe("DatePicker modal should close", () => {
  it("Should close the date picker when clicking on cancel", () => {
    const { getByText, getByTestId, queryByText } = render(
      <DatePicker title="TestDate" setDate={setDate} />
    );
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    expect(queryByText("Cancel")).not.toBeNull();
    expect(queryByText("Ok")).not.toBeNull();
    fireEvent.press(getByText("Cancel"));
    expect(setDate).toBeCalledTimes(0);
  });

  it("Should close the date picker when clicking on OK", () => {
    const { getByText, getByTestId, queryByText } = render(
      <DatePicker title="TestDate" setDate={setDate} />
    );
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    expect(queryByText("Cancel")).not.toBeNull();
    expect(queryByText("Ok")).not.toBeNull();
    fireEvent.press(getByText("Ok"));
    expect(setDate).toBeCalledTimes(1);
  });
});

describe("DatePicker should be able to select a date", () => {
  it("Should open the date picker and select a date", () => {
    const { getByText, getByTestId, queryByText } = render(
      <DatePicker title="TestDate" setDate={setDate} />
    );

    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    fireEvent.press(getByText("15"));
    fireEvent.press(getByText("Ok"));
    expect(setDate).toBeCalledTimes(2);
  });
});
