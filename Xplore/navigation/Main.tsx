import { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import Completion from "../features/Completion/screens/Completion.component";
import Chats from "../features/Chat/screens/Chats/Chats.screen";
import ChatDetails from "../features/Chat/screens/ChatDetails/ChatDetails.screen";
import BottomTabNavigator from "./BottomTabNavigator";

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="Completion" component={Completion} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
