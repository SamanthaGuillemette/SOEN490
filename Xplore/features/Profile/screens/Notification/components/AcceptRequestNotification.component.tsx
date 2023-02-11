import { View, Text, Avatar, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
  username: string;
  groupName: string;
  image: string;
}

export const AcceptRequestNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Avatar
        name="Username"
        imageURL={props.image}
        size={45}
        style={styles.avatar}
      />
      <View>
        <Text variant="body" color="primary">
          Join Request Accepted!
        </Text>
        <Text
          variant="body"
          color="bodyText"
          style={styles.bodyText}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {props.username} accepted your join request to {props.groupName}
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
