/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../components";
import Home from "../features/Dashboard/screens/Home.screen";
import Chats from "../features/Chat/screens/Chats/Chats.screen";
import { useThemeColor } from "../hooks";
import styles from "./BottomTabNavigator.styles";
import Profile from "../features/Profile/screens/Profile.screen";

const BottomTab = createBottomTabNavigator();

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
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" customColor={color} style={styles.tabBarIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home2"
        component={Home}
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
        component={Home}
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
        component={Profile}
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
