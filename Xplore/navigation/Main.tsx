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
import Onboarding from "../features/Onboarding/screens/Onboarding.screen";
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../features/Profile/screens/Profile.screen";
import Settings from "../features/Settings/screens/Settings.screen";
import Home from "../features/Dashboard/screens/Home.screen";
import Sign from "../features/Sign/screens/Sign.screen";
import ForgotPassword from "../features/Sign/components/ForgotPassword/ForgotPassword.screen";
import ResetPassword from "../features/Sign/components/ResetPassword/ResetPassword.screen";

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
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding"
      >
        {isLoggedIn ? (
          <Stack.Screen name="Onboarding" component={Onboarding} />
        ) : (
          <Stack.Screen name="Sign" component={Sign} />
        )}
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Completion" component={Completion} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
