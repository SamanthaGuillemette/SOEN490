import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { PrimaryButton } from "../PrimaryButton";
import { ShadowView } from "../ShadowView";
import { Text } from "../Text";
import styles from "./AlertModal.styles";

interface AlertModalProps {
  setAlertModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  alertMsg: string;
}

export const AlertModal = (props: AlertModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    props.setAlertModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleIndexSelect}
    >
      <View style={styles.centeredView}>
        <ShadowView
          style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
        >
          <Text variant="h4" style={styles.alertText}>
            {props.alertMsg}
          </Text>
          <PrimaryButton
            label="Done"
            onPress={handleIndexSelect}
            style={styles.primaryButton}
          />
        </ShadowView>
      </View>
    </Modal>
  );
};
