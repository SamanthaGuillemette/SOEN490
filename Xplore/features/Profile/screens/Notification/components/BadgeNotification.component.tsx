import { View, Text, Icon, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
}

export const BadgeNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="award" size="large" style={styles.icon} />
      <Text variant="body" color="primary">
        Congratulations
      </Text>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
