import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "./hooks/useColorScheme";
import { useCachedResources } from "./hooks/useCachedResources";
import Main from "./navigation/Main";
import Sign from "./features/Sign/screens/Sign.screen";

const App = () => {
  const colorScheme = useColorScheme();

  // Load resources we need (under splash screen) prior to rendering the app
  const isLoadingComplete = useCachedResources();

  // Fake login, switch state to true to login
  const [isLoggedIn] = useState(false);

  if (!isLoadingComplete) {
    // No need to render anything here
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="auto" />
          {isLoggedIn ? (
            <Main colorScheme={colorScheme} />
          ) : (
            <Sign colorScheme={colorScheme} />
          )}
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
