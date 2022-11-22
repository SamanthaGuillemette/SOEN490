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
//import { useEffect } from "react";

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  const { loggedIn, sessionStatus, getSessionStatus } = useAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getSessionStatus, []);
  return (
    <>
      {/* {getSessionStatus()} */}
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        {loggedIn?.$id !== undefined || sessionStatus ? (
          <AppStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </>
  );
};

export default Main;
