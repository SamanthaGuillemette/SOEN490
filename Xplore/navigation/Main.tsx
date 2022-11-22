import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../services/authentication/AuthContext";
import { useEffect } from "react";

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  const { sessionToken, loggedIn, getSessionStatus } = useAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getSessionStatus, []);

  return (
    <>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        {sessionToken?.$id !== undefined || loggedIn ? (
          <AppStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </>
  );
};

export default Main;
