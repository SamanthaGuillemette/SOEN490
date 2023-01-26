/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "../components";
import Home from "../features/Dashboard/screens/Home.screen";
import Chats from "../features/Chat/screens/Chats/Chats.screen";
import Leaderboard from "../features/Leaderboard/screens/Leaderboard.screen";
import { useThemeColor } from "../hooks";
import styles from "./BottomTabNavigator.styles";
import Profile from "../features/Profile/screens/Profile.screen";
import Settings from "../features/Settings/screens/Settings.screen";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import Projects from "../features/Projects/screens/Projects.screen";

const BottomTab = createBottomTabNavigator();
const CreationStack = createNativeStackNavigator();
const ProfileStk = createNativeStackNavigator();
const Edit = createNativeStackNavigator();

const CreationCreationStack = () => {
  return (
    <CreationStack.Navigator screenOptions={{ headerShown: false }}>
      <CreationStack.Screen name="Home" component={Home} />
    </CreationStack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <ProfileStk.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStk.Screen name="Profile" component={Profile} />
      <ProfileStk.Screen name="Settings" component={Settings} />
    </ProfileStk.Navigator>
  );
};

const EditStack = () => {
  return (
    <Edit.Navigator screenOptions={{ headerShown: false }}>
      <Edit.Screen name="Projects" component={Projects} />
    </Edit.Navigator>
  );
};

const BottomTabNavigator = () => {
  const primaryColor = useThemeColor("primary");
  const tabBarBackground = useThemeColor("backgroundSecondary");

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, { backgroundColor: tabBarBackground }],
        tabBarActiveTintColor: primaryColor,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={CreationCreationStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" customColor={color} style={styles.tabBarIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home2"
        component={EditStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="briefcase"
              customColor={color}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home3"
        component={Chats}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="message-circle"
              customColor={color}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home4"
        component={Leaderboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="bar-chart-2"
              customColor={color}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" customColor={color} style={styles.tabBarIcon} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
