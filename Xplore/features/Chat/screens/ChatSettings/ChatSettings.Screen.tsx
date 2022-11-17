import { SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { AvatarGroup, Text, View } from "../../../../components";
import SettingBox from "../../components/SettingBox/SettingBox.component";
import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styles from "./ChatSettings.styles";
import { ScrollView } from "react-native-gesture-handler";

interface ChatSettingsProps {
  navigation: NavigationProp<any>;
}

const ChatSettings = (props: ChatSettingsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
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
          />
          <SettingBox settingName="Copy invite link" iconName="share-2" />
          <SettingBox settingName="Add a member" iconName="user-plus" />
          <SettingBox settingName="Remove a member" iconName="user-x" />
          <SettingBox settingName="Leave group" iconName="log-out" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSettings;
