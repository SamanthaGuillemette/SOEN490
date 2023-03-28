import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../../../hooks/useThemeColor";
import {
  TextInput,
  ShadowView,
  PrimaryButton,
  SecondaryButton,
} from "../../../../../../components";
import { changeChatName } from "../../../../../../services/api/chatSettings";
import styles from "./ChatNameModal.styles";

interface ChatNameModalProps {
  chatID: String;
  setChatNameModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatNameModal = ({
  setChatNameModalVisible,
  chatID,
}: ChatNameModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const bodyText = useThemeColor("bodyText");
  const [name, setName] = useState("");

  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setChatNameModalVisible(!modalVisible);
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
            <TextInput
              placeHolder="Group Name"
              iconName="user"
              onChangeText={(thisName) => setName(thisName)}
              style={[styles.textInput, { color: bodyText }]}
            />
            <PrimaryButton
              label="Change Name"
              onPress={() => {
                if (name !== "") {
                  const nameData = {
                    chatID: chatID,
                    chatName: name,
                  };
                  changeChatName(nameData, chatID);
                  setName("");
                  handleIndexSelect();
                }
              }}
              style={styles.primaryButton}
            />
            <SecondaryButton
              label="Cancel"
              onPress={handleIndexSelect}
              style={styles.secondaryButton}
            />
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
