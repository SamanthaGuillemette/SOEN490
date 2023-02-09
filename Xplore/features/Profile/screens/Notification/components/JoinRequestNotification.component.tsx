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
        <Text variant="body" color="primary">
          Group Join Request
        </Text>
        <Text variant="body" color="bodyText" style={styles.bodyText}>
          {props.username} is requesting a join Snake Robot.
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
