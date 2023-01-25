import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./Settings.screen";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function SettingsWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Settings" component={Settings} />
    </NavigationContainer>
  );
}

describe("Tesing for <Settings /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<SettingsWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<SettingsWithNavigation />);
    expect(container).toBeTruthy();
  });
});
