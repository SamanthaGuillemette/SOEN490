import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import {
  ShadowView,
  PrimaryButton,
  SecondaryButton,
} from "../../../../components";
import styles from "./AddMemberModal.styles";

interface AddMemberModalProps {
  setAddModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddMemberModal = ({ setAddModalVisible }: AddMemberModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setAddModalVisible(!modalVisible);
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
            label="ADD"
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
