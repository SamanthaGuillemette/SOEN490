import renderer from "react-test-renderer";
import ResetPassword from "./ResetPassword.screen";

describe("Reset Pasword screen", () => {
  jest.useFakeTimers();
  it("renders correctly", () => {
    const tree = renderer.create(<ResetPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
