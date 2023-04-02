import { useState, useEffect } from "react";
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { View } from "../View";
import { Text } from "../Text";
import styles from "./RequestJoin.styles";
import {
  createRequestJoinNotif,
  deleteRequestJoinNotif,
  useUserAlreadyRequested,
} from "../../services/api/notifications";

interface RequestJoinProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  userID: string;
  projectID: string;
  projectName: string;
  projectOwnerID: string;
}

export const RequestJoin = (props: RequestJoinProps) => {
  const { style, userID, projectID, projectName, projectOwnerID } = props;
  const hasAlreadyRequested = useUserAlreadyRequested(userID, projectID);
  const [clicked, setClicked] = useState(false);
  const primary = useThemeColor("primary");
  const success = useThemeColor("success");
  const bg = useThemeColor("background");

  useEffect(() => {
    setClicked(hasAlreadyRequested);
  }, [hasAlreadyRequested]);

  clicked === true
    ? createRequestJoinNotif(userID, projectID, projectName, projectOwnerID)
    : deleteRequestJoinNotif(userID, projectID);

  return (
    <View>
      {clicked === false ? (
        <TouchableOpacity
          style={[
            style,
            styles.button,
            { backgroundColor: bg, borderColor: primary },
          ]}
          onPress={() => setClicked(!clicked)}
        >
          <Text variant="label" style={[styles.textStyle, { color: primary }]}>
            REQUEST JOIN
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            style,
            styles.button,
            { backgroundColor: bg, borderColor: success },
          ]}
          onPress={() => setClicked(!clicked)}
        >
          <Text variant="label" style={[styles.textStyle, { color: success }]}>
            REQUEST SENT
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
