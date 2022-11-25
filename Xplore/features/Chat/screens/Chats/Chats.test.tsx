import renderer from "react-test-renderer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { render } from "@testing-library/react-native";
import Chats from "../Chats/Chats.screen";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function ChatsWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Chats" component={Chats} />
    </NavigationContainer>
  );
}

describe("Tesing for <Chats /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<ChatsWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<ChatsWithNavigation />);
    expect(container).toBeTruthy();
  });
});
