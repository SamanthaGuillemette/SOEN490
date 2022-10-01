import { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import Sign from "../features/Sign/screens/Sign.screen";
import Home from "../features/Dashboard/screens/Home.screen";

const Stack = createNativeStackNavigator();

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  // Fake login, switch state to true to login
  const [isLoggedIn] = useState(false);

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign"
            component={Sign}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
