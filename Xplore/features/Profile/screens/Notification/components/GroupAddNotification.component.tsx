import { NavigationProp } from "@react-navigation/native";
import { View, Text, Icon, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  navigation: NavigationProp<any>;
  groupName: string;
  chatID?: string;
}

export const GroupAddNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="users" size="large" style={styles.icon} />
      <View>
        <Text
          variant="body"
          color="bodyText"
          style={styles.bodyText}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          <Text style={styles.bodyText} color="primary">
            {props.groupName}
          </Text>{" "}
          added you!
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton
          label="View"
          onPress={() => {
            props.navigation.navigate("ChatDetails", {
              chatID: props.chatID,
              chatType: "group",
              username: props.groupName,
              navigation: props.navigation,
            });
          }}
        />
      </View>
    </View>
  );
};
