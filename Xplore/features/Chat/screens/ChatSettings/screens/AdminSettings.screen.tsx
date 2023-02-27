import { useState } from "react";
import { useQuery } from "react-query";
import { View, ConfirmationModal } from "../../../../../components";
import SettingBox from "../components/SettingBox/SettingBox.component";
import { ChatNameModal } from "../components/ChatNameModal/ChatNameModal.component";
import { AddMemberModal } from "../components/AddMemberModal/AddMemberModal.component";
import { RemoveMemberModal } from "../components/RemoveMemberModal/RemoveMemberModal.component";
import api from "../../../../../services/appwrite/api";
import { COLLECTION_ID_MESSAGES, COLLECTION_ID_GROUP_CHATS } from "@env";
import { Query } from "appwrite";
import styles from "./SettingsOptions.styles";

interface AdminSettingsProps {
  chatID: string;
}

const AdminSettings = (props: AdminSettingsProps) => {
  const [chatNameModalVisible, setChatNameModalVisible] = useState<any>(false);
  const [addMemberModalVisible, setAddMemberModalVisible] =
    useState<any>(false);
  const [removeModalVisible, setRemoveModalVisible] = useState<any>(false);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState<any>(false);
  const [confirmLeaveVisible, setConfirmLeaveVisible] = useState<any>(false);

  // Quering chat details
  const { data: chatData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_GROUP_CHATS, [
      Query.equal("chatID", props.chatID),
    ])
  );

  const updateLastMessage = () => {
    // Update the last message for chat docs
    chatData?.documents.map((doc: any) => {
      api.updateDocument(COLLECTION_ID_GROUP_CHATS, doc.$id, {
        userID: doc.userID,
        chatID: props.chatID,
        lastMessage: "Start chatting!",
      });
    });
  };

  async function deleteChat() {
    const response = await api.listDocuments(COLLECTION_ID_MESSAGES, [
      Query.equal("chatID", props.chatID),
    ]);
    console.log(props.chatID, response);
    response?.documents.map((doc: any) => {
      api.deleteDocument(COLLECTION_ID_MESSAGES, doc.$id);
    });
    updateLastMessage();
  }

  return (
    <View style={styles.settingsContainer}>
      <SettingBox
        settingName="Change group name"
        iconName="chevron-right"
        onPress={() => setChatNameModalVisible(true)}
      />
      {chatNameModalVisible === true && (
        <ChatNameModal setChatNameModalVisible={setChatNameModalVisible} />
      )}
      <SettingBox
        settingName="Add a member"
        iconName="user-plus"
        onPress={() => setAddMemberModalVisible(true)}
      />
      {addMemberModalVisible === true && (
        <AddMemberModal setAddModalVisible={setAddMemberModalVisible} />
      )}
      <SettingBox
        settingName="Remove a member"
        iconName="user-x"
        onPress={() => setRemoveModalVisible(true)}
      />
      {removeModalVisible === true && (
        <RemoveMemberModal setRemoveModalVisible={setRemoveModalVisible} />
      )}
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
        settingName="Leave group"
        iconName="log-out"
        onPress={() => setConfirmLeaveVisible(true)}
      />
      {confirmLeaveVisible === true && (
        <ConfirmationModal
          setConfirmModalVisible={setConfirmLeaveVisible}
          confirmMsg="Are you sure you want to leave the group?"
          primaryText="Leave Group"
          secondaryText="Cancel"
        />
      )}
    </View>
  );
};

export default AdminSettings;
