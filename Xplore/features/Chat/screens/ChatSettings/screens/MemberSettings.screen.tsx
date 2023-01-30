import { useState } from "react";
import { View, ConfirmationModal, AlertModal } from "../../../../../components";
import SettingBox from "../components/SettingBox/SettingBox.component";
import { ChatNameModal } from "../components/ChatNameModal/ChatNameModal.component";
import styles from "./SettingsOptions.styles";

interface ChatSettingsProps {}

const MemberSettings = (props: ChatSettingsProps) => {
  const [chatNameModalVisible, setChatNameModalVisible] = useState<any>(false);
  const [inviteModalVisible, setInviteModalVisible] = useState<any>(false);
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
        settingName="Copy invite link"
        iconName="share-2"
        onPress={() => setInviteModalVisible(true)}
      />
      {inviteModalVisible === true && (
        <AlertModal
          setAlertModalVisible={setInviteModalVisible}
          alertMsg="Invite link copied to clipboard"
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

export default MemberSettings;
