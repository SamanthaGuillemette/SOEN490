import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../../../hooks/useThemeColor";
import {
  TextInput,
  ShadowView,
  PrimaryButton,
  SecondaryButton,
} from "../../../../../../components";
import { Query } from "appwrite";
import api from "../../../../../../services/appwrite/api";
import { COLLECTION_ID_GROUP_CHATS } from "@env";
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
  const [name, setName] = useState("");

  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setChatNameModalVisible(!modalVisible);
  }

  async function changeChatName(nameData: any) {
    try {
      const response = await api.listDocuments(COLLECTION_ID_GROUP_CHATS, [
        Query.equal("chatID", chatID),
      ]);
      response?.documents?.map((doc: any) => {
        api.updateDocument(COLLECTION_ID_GROUP_CHATS, doc.$id, {
          chatID: chatID,
          chatName: nameData.chatName,
          userID: doc.userID,
          lastMessage: doc.message,
        });
      });
    } catch (e) {
      console.log(e);
    }
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
              style={styles.textInput}
            />
            <PrimaryButton
              label="Change Name"
              onPress={() => {
                if (name !== "") {
                  const nameData = {
                    chatID: chatID,
                    chatName: name,
                  };
                  changeChatName(nameData);
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
