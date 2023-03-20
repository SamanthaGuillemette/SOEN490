import { useState } from "react";
import {
  View,
  ConfirmationModal,
  MembersActionsModal,
} from "../../../../../components";
import SettingBox from "../components/SettingBox/SettingBox.component";
import { ChatNameModal } from "../components/ChatNameModal/ChatNameModal.component";
import {
  deleteMessages,
  useListChatUsers,
} from "../../../../../services/api/chatSettings";
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

  const addUsers = useListChatUsers(props.chatID, false);
  const removeUsers = useListChatUsers(props.chatID, true);

  return (
    <View style={styles.settingsContainer}>
      <SettingBox
        settingName="Change group name"
        iconName="chevron-right"
        onPress={() => setChatNameModalVisible(true)}
      />
      {chatNameModalVisible === true && (
        <ChatNameModal
          chatID={props.chatID}
          setChatNameModalVisible={setChatNameModalVisible}
        />
      )}
      <SettingBox
        settingName="Add a member"
        iconName="user-plus"
        onPress={() => setAddMemberModalVisible(true)}
      />
      {addMemberModalVisible === true && (
        <MembersActionsModal
          setActionsModalVisible={setAddMemberModalVisible}
          action="Add"
          users={addUsers}
        />
      )}
      <SettingBox
        settingName="Remove a member"
        iconName="user-x"
        onPress={() => setRemoveModalVisible(true)}
      />
      {removeModalVisible === true && (
        <MembersActionsModal
          setActionsModalVisible={setRemoveModalVisible}
          action="Remove"
          users={removeUsers}
        />
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
          primaryAction={() => deleteMessages(props.chatID, "group")}
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
