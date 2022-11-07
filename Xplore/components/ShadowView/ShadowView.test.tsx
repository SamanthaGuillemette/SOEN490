import { render } from "@testing-library/react-native";
import { ShadowView } from "./ShadowView.component";

describe("Testing <View /> component: ", () => {
  it("renders correctly", () => {
    const { container } = render(<ShadowView>My View</ShadowView>);
    expect(container).toBeTruthy();
  });

  it("renders with children prop", () => {
    const { container } = render(<ShadowView>My 2nd View</ShadowView>);
    expect(container.props).toHaveProperty("children");
  });
});
