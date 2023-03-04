import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, ShadowView } from "../../../../components";
import { useThemeColor, useColorScheme } from "../../../../hooks";
import { BadgeNotification } from "./components/BadgeNotification.component";
import { GroupAddNotification } from "./components/GroupAddNotification.component";
import { JoinRequestNotification } from "./components/JoinRequestNotification.component";
import { AcceptRequestNotification } from "./components/AcceptRequestNotification.component";
import styles from "./Notification.styles";

interface NotificationProps {
  navigation: NavigationProp<any>;
}

const Notification = (props: NotificationProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: background }]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.notificationIconContainer}
          onPress={() => navigation.goBack()}
        >
          {colorScheme === "dark" ? (
            <Image
              source={require("../../../../assets/filled_bell_dark.png")}
              style={styles.notificationIcon}
            />
          ) : (
            <Image
              source={require("../../../../assets/filled_bell_light.png")}
              style={styles.notificationIcon}
            />
          )}
        </TouchableOpacity>
      </View>
      <ShadowView
        style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.text}>
            <Text variant="h3" color="titleText">
              Today
            </Text>
          </View>
          <BadgeNotification />
          <GroupAddNotification groupName="Snake Robot" />
          <JoinRequestNotification
            username="Berince"
            image="https://picsum.photos/200"
          />
          <AcceptRequestNotification
            username="Berince"
            groupName="Databases"
            image="https://picsum.photos/200"
          />
          <View style={styles.text}>
            <Text variant="h3" color="titleText">
              Previous
            </Text>
          </View>
          <JoinRequestNotification
            username="Josh Lewis"
            image="https://picsum.photos/200"
          />
          <BadgeNotification />
          <GroupAddNotification groupName="UI Team" />
          <JoinRequestNotification
            username="Josh Lewis"
            image="https://picsum.photos/200"
          />
          <BadgeNotification />
          <GroupAddNotification groupName="UI Team" />
        </ScrollView>
      </ShadowView>
    </SafeAreaView>
  );
};

export default Notification;
