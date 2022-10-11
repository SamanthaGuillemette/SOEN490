import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import Home from "../features/Dashboard/screens/Home.screen";
import Onboarding from "../features/Onboarding/screens/Onboarding.screen";

const Stack = createNativeStackNavigator();

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        {
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
