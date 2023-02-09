import { View, Text, Icon } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
  groupName: string;
}

export const GroupAddNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="users" size="large" style={styles.icon} />
      <Text variant="body" color="primary">
        {props.groupName}
      </Text>
    </View>
  );
};
