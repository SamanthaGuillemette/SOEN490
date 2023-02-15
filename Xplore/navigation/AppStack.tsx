import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Completion from "../features/Completion/screens/Completion.component";
import Onboarding from "../features/Onboarding/screens/Onboarding.screen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Completion" component={Completion} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;
