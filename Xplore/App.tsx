import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useCachedResources, useColorScheme, useThemeColor } from "./hooks";
import Main from "./navigation/Main";
import { ProjectCard } from "./components/ProjectCard";

const App = () => {
  const colorScheme = useColorScheme();

  // Load resources we need (under splash screen) prior to rendering the app
  const isLoadingComplete = useCachedResources();

  // Status bar background (only required for Android)
  const statusBarBg = useThemeColor("backgroundSecondary");

  if (!isLoadingComplete) {
    // No need to render anything here
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="auto" backgroundColor={statusBarBg} />

          <Main colorScheme={colorScheme} />
          <ProjectCard
            members={[{ name: "lucas" }, { name: "james" }, { name: "olivia" }]}
            projectName={"arduino car"}
            description={"an arduino controlled arduino car"}
            taskCount={13}
            conversationCount={25}
            percentComplete={56}
          />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
