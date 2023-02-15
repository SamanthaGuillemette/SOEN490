/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../../components";
import { useThemeColor } from "../../hooks";
import styles from "./BottomTabNavigator.styles";
import HomeTab from "./HomeTab";
import ProjectTab from "./ProjectTab";
import ChatTab from "./ChatTab";
import LeaderTab from "./LeaderTab";
import ProfileTab from "./ProfileGroupTab";

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
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" customColor={color} style={styles.tabBarIcon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProjectTab"
        component={ProjectTab}
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
        name="ChatTab"
        component={ChatTab}
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
        name="LeaderTab"
        component={LeaderTab}
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
        component={ProfileTab}
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
