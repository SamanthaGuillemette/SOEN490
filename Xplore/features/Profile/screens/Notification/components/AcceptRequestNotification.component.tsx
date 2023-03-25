import { View, Text, Avatar, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
  username: string;
  groupName: string;
  projectID?: string;
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
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.bodyText}
          color="primary"
        >
          {props.username}
          <Text variant="body" color="bodyText" style={styles.bodyText}>
            {" "}
            accepted your join request to{" "}
            <Text style={styles.bodyText} color="primary">
              {props.groupName}
            </Text>
          </Text>
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
