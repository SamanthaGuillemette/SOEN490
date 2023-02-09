import { View, Text, Avatar } from "../../../../../components";
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
        style={styles.icon}
      />
      <Text variant="body" color="primary">
        {props.username}
      </Text>
    </View>
  );
};
