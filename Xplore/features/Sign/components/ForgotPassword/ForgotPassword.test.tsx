import renderer from "react-test-renderer";
import ForgotPassword from "./ForgotPassword.screen";

describe("Forgot Pasword screen", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
