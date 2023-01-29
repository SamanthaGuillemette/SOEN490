import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SquaredButton } from "../../../../../components";
import { LogoutConfirmModal } from "../LogoutConfirmModal/LogoutConfirmModal.component";
import styles from "./LogoutButton.styles";

interface LogoutButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { ...restOfProps } = props;
  const [logoutConfirmModalVisible, setLogoutConfirmModalVisible] =
    useState<any>(false);

  return (
    <TouchableOpacity
      style={[styles.logoutButton]}
      {...restOfProps}
      onPress={() => setLogoutConfirmModalVisible(true)}
    >
      {logoutConfirmModalVisible === true && (
        <LogoutConfirmModal
          setLogoutConfirmModalVisible={setLogoutConfirmModalVisible}
        />
      )}
      <SquaredButton iconName="log-out" />
    </TouchableOpacity>
  );
};
