import { render } from "@testing-library/react-native";
import Settings from "../screens/Settings.screen";

describe("Settings />", () => {
  it("renders correctly", () => {
    const container = render(<Settings />);
    expect(container).toBeTruthy();
  });
});