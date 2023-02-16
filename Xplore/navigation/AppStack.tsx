import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Completion from "../features/Completion/screens/Completion.component";
import Chats from "../features/Chat/screens/Chats/Chats.screen";
import ChatDetails from "../features/Chat/screens/ChatDetails/ChatDetails.screen";
import ChatSettings from "../features/Chat/screens/ChatSettings/ChatSettings.screen";
import BottomTabNavigator from "./BottomTabNavigator";
import { AllProjects, Home } from "../features/Dashboard/screens";
import Onboarding from "../features/Onboarding/screens/Onboarding.screen";
import Profile from "../features/Profile/screens/Profile/Profile.screen";
import Settings from "../features/Profile/screens/Settings/Settings.screen";
import Notification from "../features/Profile/screens/Notification/Notification.screen";
import TopicSelection from "../features/TopicSelection/screen/TopicSelection.screen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Completion" component={Completion} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen name="ChatSettings" component={ChatSettings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllProjects" component={AllProjects} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="TopicSelection" component={TopicSelection} />
    </Stack.Navigator>
  );
};

export default AppStack;
