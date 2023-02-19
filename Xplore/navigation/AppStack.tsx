import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatDetails from "../features/Chat/screens/ChatDetails/ChatDetails.screen";
import ChatSettings from "../features/Chat/screens/ChatSettings/ChatSettings.screen";
import Completion from "../features/Completion/screens/Completion.component";
import Onboarding from "../features/Onboarding/screens/Onboarding.screen";
import TopicSelection from "../features/TopicSelection/screen/TopicSelection.screen";
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
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen name="ChatSettings" component={ChatSettings} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="TopicSelection" component={TopicSelection} />
    </Stack.Navigator>
  );
};

export default AppStack;
