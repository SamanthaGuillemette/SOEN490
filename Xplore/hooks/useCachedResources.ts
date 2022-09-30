import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load resources/data we need under the Splash screen (before rendering the app)
  useEffect(() => {
    async function loadResourcesAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts & icons
        await Font.loadAsync({
          ...Feather.font,
          "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        });
      } catch (e) {
        // We can provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAsync();

    // DO THIS ONLY ONCE
  }, []);

  return isLoadingComplete;
};
