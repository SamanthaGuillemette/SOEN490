import { SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { AvatarGroup, Text, View } from "../../../../components";
import SettingBox from "../../components/SettingBox/SettingBox.component";
import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styles from "./ChatSettings.styles";

interface ChatSettingsProps {
  navigation: NavigationProp<any>;
}

const ChatSettings = (props: ChatSettingsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const background = useThemeColor("background");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: background }]}
    >
      <TopHeader screenName={"Chat Settings"} navigation={props.navigation} />
      <View style={styles.contactName}>
        <Text variant="h2">{name}</Text>
        <View style={styles.avatarGroup}>
          <AvatarGroup />
        </View>
        <SettingBox settingName="Change group name" iconName="chevron-right" />
        <SettingBox settingName="Copy invite link" iconName="share-2" />
        <SettingBox settingName="Add a member" iconName="user-plus" />
        <SettingBox settingName="Remove a member" iconName="user-x" />
        <SettingBox settingName="Leave group" iconName="log-out" />
      </View>
    </SafeAreaView>
  );
};

export default ChatSettings;
