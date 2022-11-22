import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Completion from "../features/Completion/screens/Completion.component";
import Chats from "../features/Chat/screens/Chats/Chats.screen";
import ChatDetails from "../features/Chat/screens/ChatDetails/ChatDetails.screen";
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../features/Profile/screens/Profile.screen";
import Settings from "../features/Settings/screens/Settings.screen";
import Home from "../features/Dashboard/screens/Home.screen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Completion" component={Completion} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
