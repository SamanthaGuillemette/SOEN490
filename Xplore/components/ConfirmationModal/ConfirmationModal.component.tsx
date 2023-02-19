import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { Text } from "../Text";
import { ShadowView } from "../ShadowView";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import styles from "./ConfirmationModal.styles";

interface ConfirmationModalProps {
  setConfirmModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  primaryText: string;
  secondaryText: string;
  confirmMsg: string;
  primaryAction?: any;
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    props.setConfirmModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleIndexSelect}
    >
      <View style={styles.fullView}>
        <View style={styles.centeredView}>
          <ShadowView
            style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
          >
            <Text variant="h4" style={styles.confirmingMsg}>
              {props.confirmMsg}
            </Text>
            <PrimaryButton
              label={props.primaryText}
              onPress={() => {
                handleIndexSelect();
                props.primaryAction();
              }}
              style={styles.primaryButton}
            />
            <SecondaryButton
              label={props.secondaryText}
              onPress={handleIndexSelect}
              style={styles.secondaryButton}
            />
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
