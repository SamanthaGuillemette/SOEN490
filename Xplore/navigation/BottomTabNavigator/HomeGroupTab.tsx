import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AllProjects, Home } from "../../features/Dashboard/screens";

const HomeGroup = createNativeStackNavigator();

const HomeGroupTab = () => {
  return (
    <HomeGroup.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeGroup.Screen name="Home" component={Home} />
      <HomeGroup.Screen name="AllProjects" component={AllProjects} />
    </HomeGroup.Navigator>
  );
};

export default HomeGroupTab;
