import { View, Text, Avatar, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
  username: string;
  image: string;
}

export const JoinRequestNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Avatar
        name="Username"
        imageURL={props.image}
        size={45}
        style={styles.avatar}
      />
      <View>
        <Text
          variant="body"
          color="bodyText"
          style={styles.bodyText}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          <Text style={styles.bodyText} color="primary">
            {props.username}
          </Text>{" "}
          is requesting to join Snake Robot.
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
