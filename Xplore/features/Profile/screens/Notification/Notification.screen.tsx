import * as React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, Icon, ShadowView } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import { BadgeNotification } from "./components/BadgeNotification.component";
import { GroupAddNotification } from "./components/GroupAddNotification.component";
import { JoinRequestNotification } from "./components/JoinRequestNotification.component";
import styles from "./Notification.styles";

interface NotificationProps {
  navigation: NavigationProp<any>;
}

const Notification = (props: NotificationProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: background }]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={() => navigation.goBack()}
        >
          <Icon name="bell" color="primary" size="large" />
        </TouchableOpacity>
      </View>
      <ShadowView
        style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.text}>
            <Text variant="h3">Today</Text>
          </View>
          <BadgeNotification />
          <GroupAddNotification groupName="Snake Robot" />
          <JoinRequestNotification
            username="Berince"
            image="https://picsum.photos/200"
          />
          <View style={styles.text}>
            <Text variant="h3">Previous</Text>
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
