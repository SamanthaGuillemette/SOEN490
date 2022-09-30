import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "./hooks/useColorScheme";
import { useCachedResources } from "./hooks/useCachedResources";
import colors from "./constants/colors";

const App = () => {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  console.log(colors[colorScheme].completedPrimary);
  const bgColor: string = colors[colorScheme].completedBackground;

  if (!isLoadingComplete) {
    // "return null" === keep displaying the splash screen
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="auto" />
          <Text style={styles.text1}>Welcome to SOEN490</Text>
          <Text style={styles.text2}>Color scheme: {colorScheme}</Text>
          <View style={[styles.dynamicColor, { backgroundColor: bgColor }]} />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
  },
  text2: {
    fontSize: 20,
  },
  dynamicColor: {
    width: 60,
    height: 60,
  },
});
