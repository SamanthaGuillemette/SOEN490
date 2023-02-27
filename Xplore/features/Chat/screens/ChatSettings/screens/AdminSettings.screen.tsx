import { useState } from "react";
import { View, ConfirmationModal } from "../../../../../components";
import SettingBox from "../components/SettingBox/SettingBox.component";
import { ChatNameModal } from "../components/ChatNameModal/ChatNameModal.component";
import { AddMemberModal } from "../components/AddMemberModal/AddMemberModal.component";
import { RemoveMemberModal } from "../components/RemoveMemberModal/RemoveMemberModal.component";
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
