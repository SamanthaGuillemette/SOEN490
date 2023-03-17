import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import Projects from "../screens/Projects.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Create stack navigator
const Stack = createNativeStackNavigator();

// Wrap test component in navigation container
function ProjectsWithNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Home2" component={Projects} />
    </NavigationContainer>
  );
}

describe("Tesing for <Projects /> screen:", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<ProjectsWithNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const container = render(<ProjectsWithNavigation />);
    expect(container).toBeTruthy();
  });
});
