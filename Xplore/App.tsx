import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "./hooks/useColorScheme";
import { useCachedResources } from "./hooks/useCachedResources";
import colors from "./constants/colors";
import Main from "./navigation/Main";

const App = () => {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  console.log(colors[colorScheme].completedPrimary);

  if (!isLoadingComplete) {
    // "return null" === keep displaying the splash screen
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="auto" />
          <Main colorScheme={colorScheme} />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
