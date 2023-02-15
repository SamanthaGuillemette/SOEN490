/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../../components";
import { useThemeColor } from "../../hooks";
import styles from "./BottomTabNavigator.styles";
import Profile from "../../features/Profile/screens/Profile/Profile.screen";
import HomeGroupTab from "./HomeGroupTab";
import ProjectGroupTab from "./ProjectGroupTab";
import ChatGroupTab from "./ChatGroupTab";
import LeaderGroupTab from "./LeaderGroupTab";
import ProfileGroupTab from "./ProfileGroupTab";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const primaryColor = useThemeColor("primary");
  const tabBarBackground = useThemeColor("backgroundSecondary");

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, { backgroundColor: tabBarBackground }],
        tabBarActiveTintColor: primaryColor,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeGroupTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" customColor={color} style={styles.tabBarIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProjectsTab"
        component={ProjectGroupTab}
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
        name="ChatsTab"
        component={ChatGroupTab}
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
        name="LeaderboardTab"
        component={LeaderGroupTab}
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
        name="ProfileTab"
        component={ProfileGroupTab}
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
