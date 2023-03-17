import { CategoryScrollBar } from "./CategoryScrollBar.component";
import { fireEvent, render } from "@testing-library/react-native";

const category1 = { name: "category1", isActive: true };
const category2 = { name: "category2", isActive: true };
const category3 = { name: "category3", isActive: true };
const category4 = { name: "category4", isActive: true };
const categories = [category1, category2, category3, category4];

describe("CategoryScrollBar should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<CategoryScrollBar categories={categories} />);
    expect(container).toBeTruthy();
  });
});

describe("Category should render the category list", () => {
  it("should render the category list correctly", () => {
    const { queryByText } = render(
      <CategoryScrollBar categories={categories} />
    );
    expect(queryByText("category1")).not.toBeNull();
    expect(queryByText("category2")).not.toBeNull();
    expect(queryByText("category3")).not.toBeNull();
    expect(queryByText("category4")).not.toBeNull();
  });
});

describe("categoryScrollBar should be clickable", () => {
  it("category1 should be clickable", () => {
    const { getByText } = render(<CategoryScrollBar categories={categories} />);
    jest.spyOn(window, "alert").mockImplementation(() => {});
    expect(window.alert).not.toHaveBeenCalled();
    fireEvent.press(getByText("category1"));
    expect(window.alert).toHaveBeenCalled();
  });
});
