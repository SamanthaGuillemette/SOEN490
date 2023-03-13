import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile.screen";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function ProfileWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Profile" component={Profile} />
    </NavigationContainer>
  );
}

describe("Tesing for <Profile /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<ProfileWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<ProfileWithNavigation />);
    expect(container).toBeTruthy();
  });
});
