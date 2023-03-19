import { MemberChip } from "./MemberChip.component";
import { render } from "@testing-library/react-native";

describe("MemberChip component should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(
      <MemberChip avatar="TestAvatar" userName="TestUsername" />
    );
    expect(container).toBeTruthy();
  });
});

describe("MemberChip component should render the correct props", () => {
  it("should render the user name correctly", () => {
    const { queryByText } = render(
      <MemberChip avatar="TestAvatar" userName="TestUsername" />
    );
    expect(queryByText("TestUsername")).not.toBeNull();
  });
});
