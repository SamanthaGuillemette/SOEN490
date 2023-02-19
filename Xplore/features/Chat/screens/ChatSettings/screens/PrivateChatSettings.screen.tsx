import { useState } from "react";
import { useQuery } from "react-query";
import { View, ConfirmationModal } from "../../../../../components";
import api from "../../../../../services/appwrite/api";
import { COLLECTION_ID_MESSAGES, COLLECTION_ID_DIRECT_CHATS } from "@env";
import { Query } from "appwrite";
import SettingBox from "../components/SettingBox/SettingBox.component";
import styles from "./SettingsOptions.styles";

interface PrivateChatSettingsProps {
  contactName: string;
  chatID: string;
}

const PrivateChatSettings = (props: PrivateChatSettingsProps) => {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState<any>(false);

  // Quering msg details
  const { data: msgData } = useQuery("msg data", () =>
    api.listDocuments(COLLECTION_ID_MESSAGES, [
      Query.equal("chatID", props.chatID),
    ])
  );

  // Quering chat details
  const { data: chatData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
      Query.equal("chatID", props.chatID),
    ])
  );

  const updateLastMessage = () => {
    // Update the last message for chat docs
    chatData?.documents.map((doc: any) => {
      api.updateDocument(COLLECTION_ID_DIRECT_CHATS, doc.$id, {
        userID: doc.userID,
        contactID: doc.contactID,
        chatID: props.chatID,
        lastMessage: "Start chatting!",
      });
    });
  };

  const deleteChat = () => {
    msgData?.documents.map((doc: any) => {
      api.deleteDocument(COLLECTION_ID_MESSAGES, doc.$id);
    });
    updateLastMessage();
  };

  return (
    <View style={styles.settingsContainer}>
      <SettingBox
        settingName="Delete chat"
        iconName="trash-2"
        onPress={() => setConfirmDeleteVisible(true)}
      />
      {confirmDeleteVisible === true && (
        <ConfirmationModal
          setConfirmModalVisible={setConfirmDeleteVisible}
          confirmMsg="Are you sure you want to delete the chat?"
          primaryText="Delete chat"
          secondaryText="Cancel"
          primaryAction={deleteChat}
        />
      )}
    </View>
  );
};

export default PrivateChatSettings;
