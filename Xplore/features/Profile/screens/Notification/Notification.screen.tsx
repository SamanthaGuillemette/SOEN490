import * as React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, Icon, ShadowView } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
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
        <Text>here</Text>
      </ShadowView>
    </SafeAreaView>
  );
};

export default Notification;
