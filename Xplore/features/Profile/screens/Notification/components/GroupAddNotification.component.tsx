import { View, Text, Icon, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
  groupName: string;
}

export const GroupAddNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="users" size="large" style={styles.icon} />
      <View>
        <Text variant="body" color="bodyText" style={styles.bodyText}>
          <Text style={styles.bodyText} color="primary">
            {props.groupName}
          </Text>{" "}
          added you!
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
