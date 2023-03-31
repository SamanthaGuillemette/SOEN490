import { render } from "@testing-library/react-native";
import { Member } from "./Member.component";

describe("Member.tsx", () => {
  it("should render without errors", () => {
    const { container } = render(
      <Member avatar="testAvatar" userName="testUsername" />
    );
    expect(container).toBeTruthy();
  });

  it("should render the username correctly", () => {
    const { queryByText } = render(
      <Member avatar="testAvatar" userName="testUsername" />
    );
    expect(queryByText("testUsername")).not.toBeNull();
  });
});
