import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import {
  ShadowView,
  PrimaryButton,
  SecondaryButton,
} from "../../../../components";
import styles from "./RemoveMemberModal.styles";

interface RemoveMemberModalProps {
  setRemoveModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RemoveMemberModal = ({
  setRemoveModalVisible,
}: RemoveMemberModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setRemoveModalVisible(!modalVisible);
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
          <PrimaryButton
            label="REMOVE"
            onPress={handleIndexSelect}
            style={styles.primaryButton}
          />
          <SecondaryButton
            label="Cancel"
            onPress={handleIndexSelect}
            style={styles.secondaryButton}
          />
        </ShadowView>
      </View>
    </Modal>
  );
};
