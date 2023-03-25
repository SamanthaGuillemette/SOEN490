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
import { useListNotifications } from "../../../../services/api/notifications";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";
import styles from "./Notification.styles";

interface NotificationProps {
  navigation: NavigationProp<any>;
}

interface NotificationComponentProps {
  notif: any;
}

const NotificationComponent = ({ notif }: NotificationComponentProps) => {
  switch (notif.notificationType) {
    case "badge":
      return <BadgeNotification badgeName={notif.badgeName} />;
    case "groupAdd":
      return (
        <GroupAddNotification
          groupName={notif.groupName}
          chatID={notif.chatID}
        />
      );
    case "joinRequest":
      return (
        <JoinRequestNotification
          username="Berince"
          image="https://picsum.photos/200"
          projectID={notif.projectID}
          //memberRequestingID={notif.memberRequestingID}
        />
      );
    case "joinAccept":
      return (
        <AcceptRequestNotification
          projectID={notif.projectID}
          username="Berince"
          groupName="Databases"
          image="https://picsum.photos/200"
          //memberAcceptedRequestID={notif.memberAcceptedRequestID}
        />
      );
    default:
      return null;
  }
};

const Notification = (props: NotificationProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const colorScheme = useColorScheme();

  const { data: userdata } = useQuery("user data", () => api.getAccount());
  const userId = userdata?.$id as string;
  const notifications = useListNotifications(userId);

  const recentNotifs = notifications.filter((notif: any) => !notif.seen);
  const previousNotifs = notifications.filter((notif: any) => notif.seen);

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
          {recentNotifs.length > 0 ? (
            <View style={styles.text}>
              <Text variant="h3" color="titleText">
                Recent
              </Text>
            </View>
          ) : null}
          {recentNotifs.map((notif: any) => (
            <NotificationComponent key={notif.id} notif={notif} />
          ))}
          {previousNotifs.length > 0 ? (
            <View style={styles.text}>
              <Text variant="h3" color="titleText">
                Previous
              </Text>
            </View>
          ) : null}
          {previousNotifs.map((notif: any) => (
            <NotificationComponent key={notif.id} notif={notif} />
          ))}
        </ScrollView>
      </ShadowView>
    </SafeAreaView>
  );
};

export default Notification;
