import { View, Text, Icon, ChipButton } from "../../../../../components";
import styles from "./Notif.styles";

interface NotificationProps {
  badgeName?: string;
}

export const BadgeNotification = (props: NotificationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="award" size="large" style={styles.icon} />
      <View>
        <Text
          variant="body"
          color="primary"
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.bodyText}
        >
          Congratulations!
          <Text variant="body" color="bodyText" style={styles.bodyText}>
            {" "}
            you just earned a new badge.
          </Text>
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
