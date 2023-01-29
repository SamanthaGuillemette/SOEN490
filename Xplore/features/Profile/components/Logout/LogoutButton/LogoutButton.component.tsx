import { useState } from "react";
import { StyleProp, ViewStyle, TouchableOpacityProps } from "react-native";
import { SquaredButton, View } from "../../../../../components";
import { LogoutConfirmModal } from "../LogoutConfirmModal/LogoutConfirmModal.component";

interface LogoutButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { ...restOfProps } = props;
  const [logoutConfirmModalVisible, setLogoutConfirmModalVisible] =
    useState<any>(false);

  return (
    <View {...restOfProps}>
      {logoutConfirmModalVisible === true && (
        <LogoutConfirmModal
          setLogoutConfirmModalVisible={setLogoutConfirmModalVisible}
        />
      )}
      <SquaredButton
        iconName="log-out"
        onPress={() => setLogoutConfirmModalVisible(true)}
      />
    </View>
  );
};
