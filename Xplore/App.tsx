/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useCachedResources, useColorScheme } from "./hooks";
import Main from "./navigation/Main";
import { ProjectCard } from "./components/ProjectCard";

const App = () => {
  const colorScheme = useColorScheme();

  // Load resources we need (under splash screen) prior to rendering the app
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    // No need to render anything here
    return null;
  } else {
    return (
      <>
      {/* // <SafeAreaProvider>
      //   <PaperProvider> */}
          {/* <StatusBar style="auto" />
          <Main colorScheme={colorScheme} /> */}
          <ProjectCard
            projectName="test name"
            description="this is a test description for a given project. The text should cut off at the 4th word"
            members={[]}
            taskCount={Number(12)}
            conversationCount={Number(38)}
            percentComplete={Number(58)}
          />
        {/* </PaperProvider>
      </SafeAreaProvider> */}
      </>
    );
  }
};

export default App;
