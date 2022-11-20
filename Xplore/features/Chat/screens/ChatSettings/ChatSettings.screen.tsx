import { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import {
  AvatarGroup,
  Text,
  View,
  ConfirmationModal,
  AlertModal,
} from "../../../../components";
import SettingBox from "./components/SettingBox/SettingBox.component";
import { ChatNameModal } from "./components/ChatNameModal/ChatNameModal.component";
import { AddMemberModal } from "./components/AddMemberModal/AddMemberModal.component";
import { RemoveMemberModal } from "./components/RemoveMemberModal/RemoveMemberModal.component";
import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./ChatSettings.styles";

interface ChatSettingsProps {
  navigation: NavigationProp<any>;
}

const ChatSettings = (props: ChatSettingsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const [chatNameModalVisible, setChatNameModalVisible] = useState<any>(false);
  const [inviteModalVisible, setInviteModalVisible] = useState<any>(false);
  const [addModalVisible, setAddModalVisible] = useState<any>(false);
  const [removeModalVisible, setRemoveModalVisible] = useState<any>(false);
  const [confirmLeaveVisible, setConfirmLeaveVisible] = useState<any>(false);
  const [confirmBlockVisible, setConfirmBlockVisible] = useState<any>(false);
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Chat Settings"} navigation={props.navigation} />
      <ScrollView style={{ backgroundColor: background }}>
        <View style={styles.settingsContainer}>
          <Text style={styles.contactName} variant="h2">
            {name}
          </Text>
          <View style={styles.avatarGroup}>
            <AvatarGroup
              usersAvatars={[
                "https://picsum.photos/200",
                "https://picsum.photos/200",
                "https://picsum.photos/200",
                "https://picsum.photos/200",
                "https://picsum.photos/200",
              ]}
            />
          </View>
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
            settingName="Add a member"
            iconName="user-plus"
            onPress={() => setAddModalVisible(true)}
          />
          {addModalVisible === true && (
            <AddMemberModal setAddModalVisible={setAddModalVisible} />
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
            settingName="Block user"
            iconName="user-x"
            onPress={() => setConfirmBlockVisible(true)}
          />
          {confirmBlockVisible === true && (
            <ConfirmationModal
              setConfirmModalVisible={setConfirmBlockVisible}
              confirmMsg={"Are you sure you want to block " + name + "?"}
              primaryText={"Block " + name}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSettings;
