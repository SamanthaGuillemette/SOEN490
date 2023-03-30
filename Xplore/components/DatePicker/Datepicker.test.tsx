import { DatePicker } from "./DatePicker.component";
import { render, fireEvent } from "@testing-library/react-native";

describe("DatePicker should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<DatePicker title="TestDate" />);
    expect(container).toBeTruthy();
  });
});

describe("DatePicker Title should appear correctly", () => {
  it("The title TestDate should appear", () => {
    const { queryByText } = render(<DatePicker title="TestDate" />);
    expect(queryByText("TestDate")).not.toBeNull();
  });
});

describe("DatePicker should be clickable", () => {
  it("Should open the date picker when clicked on", () => {
    const { getByTestId, queryByText } = render(
      <DatePicker title="TestDate" />
    );
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    expect(queryByText("Cancel")).not.toBeNull();
    expect(queryByText("Ok")).not.toBeNull();
  });
});

describe("DatePicker modal should close", () => {
  it("Should close the date picker when clicking on cancel", () => {
    const { getByText, getByTestId, queryByText } = render(
      <DatePicker title="TestDate" />
    );
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    expect(queryByText("Cancel")).not.toBeNull();
    expect(queryByText("Ok")).not.toBeNull();
    fireEvent.press(getByText("Cancel"));
  });

  it("Should close the date picker when clicking on OK", () => {
    const { getByText, getByTestId, queryByText } = render(
      <DatePicker title="TestDate" />
    );
    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    expect(queryByText("Cancel")).not.toBeNull();
    expect(queryByText("Ok")).not.toBeNull();
    fireEvent.press(getByText("Ok"));
  });
});

describe("DatePicker should be able to select a date", () => {
  it("Should open the date picker and select a date", () => {
    const { getByText, getByTestId, queryByText } = render(
      <DatePicker title="TestDate" />
    );

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let monthNumber = month.toString();

    if (month < 10) {
      monthNumber = "0" + month.toString();
    }

    let todaysDate = year.toString() + "-" + monthNumber + "-" + "15";

    expect(queryByText("Cancel")).toBeNull();
    expect(queryByText("Ok")).toBeNull();
    fireEvent.press(getByTestId("calendar"));
    fireEvent.press(getByText("15"));
    fireEvent.press(getByText("Ok"));
    expect(queryByText(todaysDate)).not.toBeNull();
  });
});
