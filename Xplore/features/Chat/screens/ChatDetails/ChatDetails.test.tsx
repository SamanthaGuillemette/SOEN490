import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatDetails from "./ChatDetails.screen";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function ChatDetailsWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
    </NavigationContainer>
  );
}

describe("Tesing for <ChatDetails /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<ChatDetailsWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<ChatDetailsWithNavigation />);
    expect(container).toBeTruthy();
  });
});
