import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import VerificationStack from "./VerificationStack";
import { useEffect } from "react";
import { useAuth } from "../hooks";
//import { account } from "../services/appwrite/api";

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  const {
    sessionToken,
    accountToken,
    loggedIn,
    getSessionStatus,
    getAccountStatus,
  } = useAuth();

  useEffect(() => {
    getSessionStatus("current");
    getAccountStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(
    `sessionToken: ${JSON.stringify(sessionToken)}\n loggedIn: ${JSON.stringify(
      loggedIn
    )}\n accountToken${JSON.stringify(accountToken)}\n`
  );
  if (
    sessionToken?.$id !== undefined &&
    loggedIn &&
    accountToken?.emailVerification
  ) {
    console.log("appstack");
    return (
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <AppStack />
      </NavigationContainer>
    );
  } else if (
    sessionToken?.$id !== undefined &&
    !loggedIn &&
    !accountToken?.emailVerification
  ) {
    console.log("veristack");
    return (
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <VerificationStack />
      </NavigationContainer>
    );
  } else {
    console.log("authstack");
    return (
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <AuthStack />
      </NavigationContainer>
    );
  }

  // return (
  //   <>
  //     <NavigationContainer
  //       theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
  //     >
  //       {sessionToken?.$id !== undefined || loggedIn ? (
  //         <AppStack />
  //       ) : (
  //         <AuthStack />
  //       )}
  //     </NavigationContainer>
  //   </>

  // );
};

export default Main;
