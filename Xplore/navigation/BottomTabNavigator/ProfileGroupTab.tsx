import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Notification,
  Profile,
  Settings,
} from "../../features/Profile/screens";

const ProfileStack = createNativeStackNavigator();

const ProfileTab = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Settings" component={Settings} />
      <ProfileStack.Screen name="Notification" component={Notification} />
    </ProfileStack.Navigator>
  );
};

export default ProfileTab;
