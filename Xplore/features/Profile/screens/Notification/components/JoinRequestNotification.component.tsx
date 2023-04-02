import { useState } from "react";
import {
  View,
  Text,
  Avatar,
  ChipButton,
  ConfirmationModal,
} from "../../../../../components";
import { useGetUserInfo } from "../../../../../services/api/search";
import styles from "./Notif.styles";
import { createAcceptJoinNotif } from "../../../../../services/api/notifications";

interface NotificationProps {
  projectID?: any;
  memberRequestingID?: any;
  projectName?: any;
  userID?: any;
}

export const JoinRequestNotification = (props: NotificationProps) => {
  const [requestActionVisible, setRequestActionVisible] = useState<any>(false);
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
            {props.projectName}
          </Text>
          .
        </Text>
      </View>
      <View style={styles.chipButton}>
        <ChipButton
          label="View"
          onPress={() => setRequestActionVisible(true)}
        />
      </View>
      {requestActionVisible === true && (
        <ConfirmationModal
          setConfirmModalVisible={setRequestActionVisible}
          confirmMsg={
            "Accept " +
            userRequestingInfo[0].username +
            "'s join request to " +
            props.projectName +
            "?"
          }
          primaryText="Accept Request"
          secondaryText="Deny Request"
          primaryAction={() =>
            createAcceptJoinNotif(
              userRequestingInfo[0].id,
              props.projectID,
              props.projectName,
              props.userID
            )
          }
        />
      )}
    </View>
  );
};
