import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../services/authentication/AuthContext";
//import { useEffect } from "react";

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  const { loggedIn } = useAuth();

  //useEffect(() => getSessionStatus(), []);
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {loggedIn?.$id !== undefined ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Main;
