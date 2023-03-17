import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { useCachedResources, useColorScheme, useThemeColor } from "./hooks";
import Main from "./navigation/Main";
import { AuthProvider } from "./services/authentication";
import { QueryClient, QueryClientProvider } from "react-query";
// This is a test comment.
const App = () => {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources(); // Load resources we need (under splash screen) prior to rendering the app
  const statusBarBg = useThemeColor("backgroundSecondary"); // Status bar background (only required for Android)
  const queryClient = new QueryClient(); // queryClient for React Query

  if (!isLoadingComplete) {
    // No need to render anything here
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <StatusBar style="auto" backgroundColor={statusBarBg} />
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <Main colorScheme={colorScheme} />
            </QueryClientProvider>
          </AuthProvider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
