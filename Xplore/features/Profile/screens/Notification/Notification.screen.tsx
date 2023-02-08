import * as React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { View, Icon } from "../../../../components";
import styles from "./Notification.styles";

interface NotificationProps {
  navigation: NavigationProp<any>;
}

const Notification = (props: NotificationProps) => {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.notificationIcon}>
          <Icon name="bell" color="primary" size="large" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
