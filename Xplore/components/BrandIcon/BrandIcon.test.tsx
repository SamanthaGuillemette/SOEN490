import { render } from "@testing-library/react-native";
import { BrandIcon } from "./BrandIcon.component";

const BrandIconTest = {
  name: "figma",
};

describe("Testing <BrandIcon /> component: ", () => {
  it("renders correctly", () => {
    const { container } = render(<BrandIcon name="github" />);
    expect(container).toBeTruthy();
  });

  it("renders matching object for prop", () => {
    const { container } = render(<BrandIcon name="figma" />);
    expect(container.props).toMatchObject(BrandIconTest);
  });
});
