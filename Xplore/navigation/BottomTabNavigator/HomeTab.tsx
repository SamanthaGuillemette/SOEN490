import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AllProjects, Home } from "../../features/Dashboard/screens";

const HomeStack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AllProjects" component={AllProjects} />
    </HomeStack.Navigator>
  );
};

export default HomeTab;
