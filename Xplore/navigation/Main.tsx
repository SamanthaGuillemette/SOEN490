import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import VerificationStack from "./VerificationStack";
import { useEffect, useState } from "react";
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

  const [data, setData] = useState<Linking.ParsedURL | null>(null);

  function handleDeepLink(event: any) {
    let linkData = Linking.parse(event.url);
    setData(linkData);
  }

  // TODO Need to fix this event listener and the useEffect which comes after it
  Linking.addEventListener("url", handleDeepLink);

  useEffect(() => {
    console.log("===> Deeplink data: " + JSON.stringify(data));
    console.log("\tuserid: " + data?.queryParams?.userId);
    console.log("\tsecret: " + data?.queryParams?.secret);
    data ?? verifyEmail(data?.queryParams?.userId, data?.queryParams?.secret);
  }, [data]);

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
