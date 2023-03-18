import { ChatDate } from "./ChatDate.component";
import { render } from "@testing-library/react-native";

describe("ChatDate should render correctly", () => {
  it("should render correctly", () => {
    const { container } = render(<ChatDate date={"27/12/2022"} />);
    expect(container).toBeTruthy();
  });
});

describe("ChatDate should render the correct date", () => {
  it("The date 27/12/2022 should render", () => {
    const { queryByText } = render(<ChatDate date={"27/12/2022"} />);
    expect(queryByText("27/12/2022")).not.toBeNull();
  });
});
