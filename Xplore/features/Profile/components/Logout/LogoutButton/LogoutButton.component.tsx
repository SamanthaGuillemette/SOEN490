import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  Image
} from "react-native";
import { LogoutConfirmModal } from "../LogoutConfirmModal/LogoutConfirmModal.component";
import styles from "./LogoutButton.styles";

interface LogoutButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { style, ...restOfProps } = props;
  const [logoutConfirmModalVisible, setLogoutConfirmModalVisible] = useState<any>(false);

  return (
    <TouchableOpacity
        style={[style, styles.logoutButton]}
        {...restOfProps}
        onPress={() => setLogoutConfirmModalVisible(true)}
    >
    {logoutConfirmModalVisible === true && (
        <LogoutConfirmModal setLogoutConfirmModalVisible={setLogoutConfirmModalVisible} />
    )}
      <Image
        style={styles.logoutButton}
        source={require("../../../../../assets/logout.png")}
      />
    </TouchableOpacity>
  );
};