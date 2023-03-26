import { View, Text, Avatar, ChipButton } from "../../../../../components";
import { useGetUserInfo } from "../../../../../services/api/search";
import styles from "./Notif.styles";

interface NotificationProps {
  projectID?: string;
  memberRequestingID?: string;
}

export const JoinRequestNotification = (props: NotificationProps) => {
  const userRequestingInfo = useGetUserInfo(props.memberRequestingID);
  if (!userRequestingInfo) {
    return null; // return null or some placeholder while waiting for API response
  }

  return (
    <View style={styles.container}>
      <Avatar
        name={userRequestingInfo[0].username}
        imageURL={userRequestingInfo[0].avatar}
        size={45}
        style={styles.avatar}
      />
      <View>
        <Text
          variant="body"
          color="bodyText"
          style={styles.bodyText}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          <Text style={styles.bodyText} color="primary">
            {userRequestingInfo[0].username}
          </Text>{" "}
          is requesting to join{" "}
          <Text style={styles.bodyText} color="primary">
            {props.projectID}
          </Text>
          .
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton label="View" />
      </View>
    </View>
  );
};
