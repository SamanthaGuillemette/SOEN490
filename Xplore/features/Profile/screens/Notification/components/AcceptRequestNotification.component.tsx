import { View, Text, Avatar, ChipButton } from "../../../../../components";
import { useGetUserInfo } from "../../../../../services/api/search";
import styles from "./Notif.styles";

interface NotificationProps {
  projectID?: any;
  memberAcceptingID?: any;
  projectName?: any;
}

export const AcceptRequestNotification = (props: NotificationProps) => {
  const userAcceptingInfo = useGetUserInfo(props.memberAcceptingID);
  if (!userAcceptingInfo) {
    return null; // return null or some placeholder while waiting for API response
  }
  return (
    <View style={styles.container}>
      <Avatar
        name={userAcceptingInfo[0].username}
        imageURL={userAcceptingInfo[0].avatar}
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
          {userAcceptingInfo[0].username}
          <Text variant="body" color="bodyText" style={styles.bodyText}>
            {" "}
            accepted your join request to{" "}
            <Text style={styles.bodyText} color="primary">
              {props.projectName}
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
