import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sign from "./Sign.screen";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function SignWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Sign" component={Sign} />
    </NavigationContainer>
  );
}

describe("Tesing for <Sign /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<SignWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<SignWithNavigation />);
    expect(container).toBeTruthy();
  });
});
