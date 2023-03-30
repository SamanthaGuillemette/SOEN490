import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  EditProfile,
  Notification,
  Profile,
  Settings,
  UpdatePassword,
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
      <ProfileStack.Screen name="UpdatePassword" component={UpdatePassword} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileTab;
