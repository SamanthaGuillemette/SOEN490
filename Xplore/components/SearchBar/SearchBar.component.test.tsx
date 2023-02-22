import { render } from "react-native-testing-library";
import React from "react";
import { SearchBar } from "./SearchBar.component";

describe("SearchBar should render correctly", () => {
  it("should render the placeholder search", () => {
    const { queryByPlaceholder } = render(<SearchBar />);
    expect(queryByPlaceholder("Search")).not.toBeNull();
  });
});
