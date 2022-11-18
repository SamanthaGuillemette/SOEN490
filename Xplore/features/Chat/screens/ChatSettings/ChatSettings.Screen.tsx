import { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { AvatarGroup, Text, View } from "../../../../components";
import SettingBox from "../../components/SettingBox/SettingBox.component";
import { ChatNameModal } from "../../components/ChatNameModal/ChatNameModal.component";
import { InviteLinkModal } from "../../components/InviteLinkModal/InviteLinkModal.component";
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
            <InviteLinkModal setInviteModalVisible={setInviteModalVisible} />
          )}
          <SettingBox settingName="Add a member" iconName="user-plus" />
          <SettingBox settingName="Remove a member" iconName="user-x" />
          <SettingBox settingName="Leave group" iconName="log-out" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSettings;
