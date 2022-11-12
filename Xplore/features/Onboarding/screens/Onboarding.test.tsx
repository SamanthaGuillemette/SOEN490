import renderer from "react-test-renderer";
import Onboarding from "./Onboarding.screen";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function OnboardingWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </NavigationContainer>
  );
}

describe("Tesing for <Onboarding /> component", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<OnboardingWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<OnboardingWithNavigation />);
    expect(container).toBeTruthy();
  });
});
