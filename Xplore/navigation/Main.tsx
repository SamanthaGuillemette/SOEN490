import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../services/authentication/AuthContext";

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  const { loggedIn } = useAuth();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {loggedIn?.$id !== undefined ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Main;
