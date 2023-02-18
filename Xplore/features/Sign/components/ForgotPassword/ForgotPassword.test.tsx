import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import ForgotPassword from "./ForgotPassword.screen";

jest.mock("expo-linking", () => {
  const module: typeof import("expo-linking") = {
    ...jest.requireActual("expo-linking"),
    createURL: jest.fn(),
  };

  return module;
});

describe("Forgot Pasword screen", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("renders title", () => {
  it("renders the correct screen title", () => {
    const { queryByText } = render(<ForgotPassword />);
    expect(queryByText("Forgot password?")).not.toBeNull();
  });
});
describe("renders email input box", () => {
  it("renders the 'Email' input box", () => {
    const { queryByPlaceholder } = render(<ForgotPassword />);
    expect(queryByPlaceholder("Email")).not.toBeNull();
  });
});

describe("renders the reset button", () => {
  it("renders the correct button text", () => {
    const { queryByText } = render(<ForgotPassword />);
    expect(queryByText("SEND RESET LINK")).not.toBeNull();
  });
});
