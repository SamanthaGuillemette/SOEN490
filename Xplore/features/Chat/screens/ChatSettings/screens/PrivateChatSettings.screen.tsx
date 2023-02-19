import { useState } from "react";
import { useQuery } from "react-query";
import { View, ConfirmationModal } from "../../../../../components";
import api from "../../../../../services/appwrite/api";
import { COLLECTION_ID_MESSAGES } from "@env";
import { Query } from "appwrite";
import SettingBox from "../components/SettingBox/SettingBox.component";
import styles from "./SettingsOptions.styles";

interface PrivateChatSettingsProps {
  contactName: string;
  chatID: string;
}

const PrivateChatSettings = (props: PrivateChatSettingsProps) => {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState<any>(false);
  const [confirmBlockVisible, setConfirmBlockVisible] = useState<any>(false);

  // Quering chat details
  const { data: msgData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_MESSAGES, [
      Query.equal("chatID", props.chatID),
    ])
  );

  const deleteChat = () => {
    msgData?.documents.map((doc: any) => {
      api.deleteDocument(COLLECTION_ID_MESSAGES, doc.$id);
    });
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
      <SettingBox
        settingName="Block user"
        iconName="user-x"
        onPress={() => setConfirmBlockVisible(true)}
      />
      {confirmBlockVisible === true && (
        <ConfirmationModal
          setConfirmModalVisible={setConfirmBlockVisible}
          confirmMsg={
            "Are you sure you want to block " + props.contactName + "?"
          }
          primaryText={"Block " + props.contactName}
          secondaryText="Cancel"
        />
      )}
    </View>
  );
};

export default PrivateChatSettings;
