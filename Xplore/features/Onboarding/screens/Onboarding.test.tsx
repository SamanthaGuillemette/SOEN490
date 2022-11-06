import renderer from "react-test-renderer";
import Onboarding from "./Onboarding.screen";
import { render } from "@testing-library/react-native";

describe("<Onboarding />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Onboarding />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Onboarding />", () => {
  it("renders correctly", () => {
    const container = render(<Onboarding />);
    expect(container).toBeTruthy();
  });
});
