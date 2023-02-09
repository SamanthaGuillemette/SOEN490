import { View, Text, Icon } from "../../../../../components";
import styles from "./Notification.styles";

interface NotificationProps {
  badgeName?: string;
}

export const BadgeNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="award" style={styles.icon} />
      <Text variant="body" color="primary">
        Congratulations
      </Text>
    </View>
  );
};
