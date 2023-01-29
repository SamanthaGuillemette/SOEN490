import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../../hooks/useThemeColor";
import {
  Text,
  PrimaryButton,
  SecondaryButton,
} from "../../../../../components";
import { LogoutSuccessModal } from "../LogoutSuccessModal/LogoutSuccessModal.component";
import styles from "./LogoutConfirmModal.styles";

interface LogoutConfirmModalProps {
  setLogoutConfirmModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogoutConfirmModal = ({
  setLogoutConfirmModalVisible: setLogoutConfirmModalVisible,
}: LogoutConfirmModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const background = useThemeColor("background");

  const [logoutSuccessModalVisible, setLogoutSuccessModalVisible] =
    useState<any>(false);

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
        <View style={[styles.modalView, { backgroundColor: background }]}>
          <Text variant="h2" color="titleText" style={styles.logoutText}>
            Log out of Xplorify?
          </Text>
          <PrimaryButton
            label="LOG OUT"
            style={styles.logoutButton}
            onPress={() => setLogoutSuccessModalVisible(true)}
          />
          {logoutSuccessModalVisible === true && (
            <LogoutSuccessModal
              setLogoutSuccessModalVisible={setLogoutSuccessModalVisible}
            />
          )}
          <SecondaryButton
            label="CANCEL"
            onPress={handleClose}
            style={styles.cancelButton}
          />
        </View>
      </View>
    </Modal>
  );
};
