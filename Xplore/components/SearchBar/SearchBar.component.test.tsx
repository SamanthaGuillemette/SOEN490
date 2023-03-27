import { render } from "react-native-testing-library";
import React from "react";
import { SearchBar } from "./SearchBar.component";
import { fireEvent } from "@testing-library/react-native";

describe("SearchBar should render correctly", () => {
  it("should render the placeholder search", () => {
    const { queryByPlaceholder } = render(<SearchBar />);
    expect(queryByPlaceholder("Search")).not.toBeNull();
  });

  it("should render the filter button", () => {
    const { queryByTestId } = render(<SearchBar showFilterButton={true} />);
    expect(queryByTestId("sliders")).not.toBeNull();
  });

  it("should be able to click the filter button", () => {
    const { getByTestId } = render(<SearchBar showFilterButton={true} />);
    fireEvent.press(getByTestId("sliders"));
  });

  it("should be able to click the search textbox", () => {
    const { getByPlaceholder } = render(<SearchBar showFilterButton={true} />);
    fireEvent.press(getByPlaceholder("Search"));
  });
});
