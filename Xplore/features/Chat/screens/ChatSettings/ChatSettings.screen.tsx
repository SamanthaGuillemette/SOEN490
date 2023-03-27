import { ScrollView } from "react-native-gesture-handler";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { AvatarGroup, Text, View } from "../../../../components";
import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./ChatSettings.styles";
import AdminSettings from "./screens/AdminSettings.screen";
import PrivateChatSettings from "./screens/PrivateChatSettings.screen";
import { useListAvatars } from "../../../../services/api/chatSettings";
import { SafeAreaView } from "react-native-safe-area-context";

interface ChatSettingsProps {
  navigation: NavigationProp<any>;
  chatID: string;
  username: string;
  chatType: string;
}

const ChatSettings = (props: ChatSettingsProps) => {
  const route = useRoute();
  let { chatID, username, chatType }: any = route.params;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const avatars: any = useListAvatars(chatID, chatType);
  console.log(username);
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Chat Settings"} navigation={props.navigation} />
      <ScrollView style={{ backgroundColor: background }}>
        <View style={styles.settingsContainer}>
          <Text style={styles.contactName} variant="h2">
            {username}
          </Text>
          <View style={styles.avatarGroup}>
            <AvatarGroup usersAvatars={avatars} />
          </View>
          {chatType === "group" ? (
            <AdminSettings chatID={chatID} chatName={username} />
          ) : (
            <PrivateChatSettings contactName={chatID} chatID={chatID} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSettings;
