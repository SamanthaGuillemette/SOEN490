/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../../components";
import Chats from "../../features/Chat/screens/Chats/Chats.screen";
import Leaderboard from "../../features/Leaderboard/screens/Leaderboard.screen";
import { useThemeColor } from "../../hooks";
import styles from "./BottomTabNavigator.styles";
import Profile from "../../features/Profile/screens/Profile/Profile.screen";
import Projects from "../../features/Projects/screens/Projects.screen";
import HomeGroupTab from "./HomeGroupTab";

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
        component={HomeGroupTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" customColor={color} style={styles.tabBarIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Projects"
        component={Projects}
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
        name="Chats"
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
        name="Leaderboard"
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
