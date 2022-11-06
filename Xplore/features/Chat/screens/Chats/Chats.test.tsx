import { render } from "@testing-library/react-native";
import Chats from "../Chats/Chats.screen";

describe("Chats />", () => {
  it("renders correctly", () => {
    const container = render(<Chats />);
    expect(container).toBeTruthy();
  });
});
