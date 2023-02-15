import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Notification,
  Profile,
  Settings,
} from "../../features/Profile/screens";

const ProfileGroup = createNativeStackNavigator();

const ProfileGroupTab = () => {
  return (
    <ProfileGroup.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileGroup.Screen name="Profile" component={Profile} />
      <ProfileGroup.Screen name="Settings" component={Settings} />
      <ProfileGroup.Screen name="Notification" component={Notification} />
    </ProfileGroup.Navigator>
  );
};

export default ProfileGroupTab;
