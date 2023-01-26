import { useState } from "react";
import { View, ConfirmationModal } from "../../../../../components";
import SettingBox from "../components/SettingBox/SettingBox.component";
import styles from "./SettingsOptions.styles";

interface PrivateChatSettingsProps {
  contactName: string;
}

const PrivateChatSettings = (props: PrivateChatSettingsProps) => {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState<any>(false);
  const [confirmBlockVisible, setConfirmBlockVisible] = useState<any>(false);
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
