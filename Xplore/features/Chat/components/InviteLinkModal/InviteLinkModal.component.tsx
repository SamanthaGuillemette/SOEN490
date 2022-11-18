import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { Text, ShadowView, PrimaryButton } from "../../../../components";
import styles from "./InviteLinkModal.styles";

interface InviteLinkModalProps {
  setInviteModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InviteLinkModal = ({
  setInviteModalVisible,
}: InviteLinkModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setInviteModalVisible(!modalVisible);
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
          <Text>Invite link copied to clipboard</Text>
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
