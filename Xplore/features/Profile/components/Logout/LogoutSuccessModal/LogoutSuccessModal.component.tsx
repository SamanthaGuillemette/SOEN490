import { useState } from "react";
import { Modal, View, Image } from "react-native";
import { useThemeColor } from "../../../../../hooks/useThemeColor";
import {
  Text,
  ShadowView,
} from "../../../../../components";
import styles from "./LogoutSuccessModal.styles";

interface LogoutSuccessModalProps {
  setLogoutSuccessModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogoutSuccessModal = ({
  setLogoutSuccessModalVisible: setLogoutSuccessModalVisible,
}: LogoutSuccessModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  
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
    >
      <View style={styles.fullView}>
        <ShadowView
          style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
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
        </ShadowView>
      </View>
    </Modal>
  );
};
