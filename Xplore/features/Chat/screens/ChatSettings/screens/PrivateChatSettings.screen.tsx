import { useState } from "react";
import { View, ConfirmationModal } from "../../../../../components";
import { deleteMessages } from "../../../../../services/api/chatSettings";
import SettingBox from "../components/SettingBox/SettingBox.component";
import styles from "./SettingsOptions.styles";

interface PrivateChatSettingsProps {
  contactName: string;
  chatID: string;
}

const PrivateChatSettings = (props: PrivateChatSettingsProps) => {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState<any>(false);

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
          primaryAction={() => deleteMessages(props.chatID, "direct")}
        />
      )}
    </View>
  );
};

export default PrivateChatSettings;
