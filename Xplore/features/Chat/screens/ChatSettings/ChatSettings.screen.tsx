import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { AvatarGroup, Text, View } from "../../../../components";
import { NavigationProp, useRoute } from "@react-navigation/native";
import styles from "./ChatSettings.styles";
import AdminSettings from "./screens/AdminSettings.screen";
import MemberSettings from "./screens/MemberSettings.screen";
import PrivateChatSettings from "./screens/PrivateChatSettings.screen";

interface ChatSettingsProps {
  navigation: NavigationProp<any>;
}

const ChatSettings = (props: ChatSettingsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const userRole = "private";
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
          {userRole === "admin" ? (
            <AdminSettings />
          ) : userRole === "member" ? (
            <MemberSettings />
          ) : (
            <PrivateChatSettings />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSettings;
