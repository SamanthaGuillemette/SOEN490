import renderer from "react-test-renderer";
import Onboarding from "./Onboarding.screen";

describe("<Onboarding />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Onboarding />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
