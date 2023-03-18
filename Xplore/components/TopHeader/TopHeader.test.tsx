import TopHeader from "./TopHeader.component";
import { render } from "@testing-library/react-native";

describe("TopHeader should render correctly", () => {
  it("Should render without error", () => {
    const { container } = render(
      <TopHeader icon1Color="primary" title="TestTitle" icon1Name="airplay" />
    );
    expect(container).toBeTruthy();
  });

  it("Should render the test title", () => {
    const { queryByText } = render(
      <TopHeader icon1Color="primary" title="TestTitle" icon1Name="airplay" />
    );
    expect(queryByText("TestTitle")).not.toBeNull();
  });

  it("Should render the test icon", () => {
    const { queryByTestId } = render(
      <TopHeader icon1Color="primary" title="TestTitle" icon1Name="airplay" />
    );
    expect(queryByTestId("airplay")).not.toBeNull();
  });

  it("Should render 2 icons", () => {
    const { queryByTestId } = render(
      <TopHeader
        icon1Color="primary"
        title="TestTitle"
        icon1Name="airplay"
        icon2Color="primary"
        icon2Name="anchor"
      />
    );
    expect(queryByTestId("airplay")).not.toBeNull();
    expect(queryByTestId("anchor")).not.toBeNull();
  });

  it("Should render as active", () => {
    const { queryByTestId } = render(
      <TopHeader
        icon1Color="primary"
        title="TestTitle"
        icon1Name="airplay"
        isActive={true}
        isMessaging={true}
      />
    );
    expect(queryByTestId("messaging")).not.toBeNull();
  });

  it("Should render as not active", () => {
    const { queryByTestId } = render(
      <TopHeader
        icon1Color="primary"
        title="TestTitle"
        icon1Name="airplay"
        isActive={false}
        isMessaging={true}
      />
    );
    expect(queryByTestId("messaging")).not.toBeNull();
  });
});
