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
import * as Linking from "expo-linking";
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
    verifyEmail,
  } = useAuth();

  let listener = Linking.addEventListener("url", handleDeepLink);

  function handleDeepLink(event: any) {
    const linkData = Linking.parse(event.url);
    if (linkData.queryParams?.userId && linkData.queryParams?.secret) {
      listener.remove();
      verifyEmail(
        linkData.queryParams.userId.toString(),
        linkData.queryParams.secret.toString()
      );
    }
  }

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
