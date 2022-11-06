import { render } from "@testing-library/react-native";
import Home from "../screens/Home.screen";
import HomeHeader from "../components/HomeHeader/HomeHeader.component";
import { LinkButton, ShadowView, Text, View } from "../../../components";

describe("Home />", () => {
  it("renders correctly", () => {
    const container = render(<Home />);
    expect(container).toBeTruthy();
  });
});

describe("HomeHeader />", () => {
  it("renders correctly with the proper text", () => {
    const container = render(<HomeHeader />);
    expect(container.getByText("Hi Josh,")).toBeTruthy();
  });
});
