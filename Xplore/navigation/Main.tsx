import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useEffect } from "react";
import { useAuth } from "../hooks";
import * as Linking from "expo-linking";

interface MainProps {
  colorScheme: ColorSchemeName;
}

const Main = ({ colorScheme }: MainProps) => {
  const {
    sessionToken,
    accountToken,
    getSessionStatus,
    getAccountStatus,
    verifyEmail,
  } = useAuth();

  let listener = Linking.addEventListener("url", handleDeepLink);

  function handleDeepLink(event: any) {
    const linkData = Linking.parse(event.url);
    if (linkData.path === "reset") {
      console.log(linkData);
    } else if (
      linkData.path === "signup" &&
      linkData.queryParams?.userId &&
      linkData.queryParams?.secret
    ) {
      verifyEmail(
        linkData.queryParams.userId.toString(),
        linkData.queryParams.secret.toString()
      );
    }
    listener.remove();
  }

  useEffect(() => {
    getSessionStatus("current");
    getAccountStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(
    `sessionToken: ${JSON.stringify(sessionToken)}\n 
    )}\n accountToken: ${JSON.stringify(accountToken)}\n`
  );

  return (
    <>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        {sessionToken && accountToken?.emailVerification ? (
          <AppStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </>
  );
};

export default Main;
