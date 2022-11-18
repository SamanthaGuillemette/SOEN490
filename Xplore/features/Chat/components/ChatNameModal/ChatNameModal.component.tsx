import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import {
  TextInput,
  ShadowView,
  PrimaryButton,
  SecondaryButton,
} from "../../../../components";
import styles from "./ChatNameModal";

interface ChatNameModalProps {
  setChatNameModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatNameModal = ({
  setChatNameModalVisible,
}: ChatNameModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setChatNameModalVisible(!modalVisible);
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
          <TextInput placeHolder="Group Name" iconName="user" />
          <PrimaryButton
            label="Change Name"
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
