import { render } from "@testing-library/react-native";
import { View } from "./View.component";

describe("Testing <View /> component: ", () => {
  it("renders correctly", () => {
    const { container } = render(<View>My View</View>);
    expect(container).toBeTruthy();
  });

  it("renders with children prop", () => {
    const { container } = render(<View>My 2nd View</View>);
    expect(container.props).toHaveProperty("children");
  });
});
