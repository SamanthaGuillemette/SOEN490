import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import Home from "./Home.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function HomeWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={Home} />
    </NavigationContainer>
  );
}

describe("Tesing for <Home /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<HomeWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<HomeWithNavigation />);
    expect(container).toBeTruthy();
  });
});
