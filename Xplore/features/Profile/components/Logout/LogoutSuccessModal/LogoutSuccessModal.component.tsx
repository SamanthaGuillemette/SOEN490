import { useState } from "react";
import { Modal, View, Image } from "react-native";
import { useThemeColor } from "../../../../../hooks/useThemeColor";
import { Text } from "../../../../../components";
import { useAuth } from "../../../../../hooks";
import styles from "./LogoutSuccessModal.styles";

interface LogoutSuccessModalProps {
  setLogoutSuccessModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogoutSuccessModal = ({
  setLogoutSuccessModalVisible: setLogoutSuccessModalVisible,
}: LogoutSuccessModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const background = useThemeColor("background");

  const { signOut } = useAuth();
  
  function handleClose() {
    setModalVisible(!modalVisible);
    setLogoutSuccessModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleClose}
      onShow={signOut}
    >
      <View style={styles.fullView}>
        <View
          style={[styles.modalView, { backgroundColor: background }]}
        >
          <Text
            variant="h2"
            color="titleText"
            style={styles.logoutSuccessText}
          >
            You've been Logged out
          </Text>
          <Image
            style={styles.checkCircleImage}
            source={require("../../../../../assets/logoutCheckCircle.png")}
          />
          <Text
            variant="body"
            color="smallText"
            style={styles.redirectionText}
          >
            Redirecting to Login Page...
          </Text>
        </View>
      </View>
    </Modal>
  );
};
