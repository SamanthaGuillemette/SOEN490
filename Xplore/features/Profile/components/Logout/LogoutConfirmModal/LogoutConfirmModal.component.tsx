import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../../hooks/useThemeColor";
import {
  Text,
  ShadowView,
  PrimaryButton,
  SecondaryButton,
} from "../../../../../components";
import styles from "./LogoutConfirmModal.styles";

interface LogoutConfirmModalProps {
  setLogoutConfirmModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogoutConfirmModal = ({
  setLogoutConfirmModalVisible: setLogoutConfirmModalVisible,
}: LogoutConfirmModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  
  function handleClose() {
    setModalVisible(!modalVisible);
    setLogoutConfirmModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.fullView}>
        <ShadowView
          style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
        >
          <Text
            variant="h2"
            color="titleText"
            style={styles.logoutText}
          >
            Log out of Xplorify?
          </Text>
          <PrimaryButton
            label="LOG OUT"
            style={styles.logoutButton}
          />
          <SecondaryButton
            label="CANCEL"
            onPress={handleClose}
            style={styles.cancelButton}
          />
        </ShadowView>
      </View>
    </Modal>
  );
};
