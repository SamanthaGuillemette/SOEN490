import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <Text>Welcome to SOEN490</Text>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
