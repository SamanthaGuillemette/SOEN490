import { SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.Component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styles from "./ChatSettings.styles";

interface ChatSettingsProps {
  navigation: NavigationProp<any>;
}

const ChatSettings = (props: ChatSettingsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      {/* <ChatDetailsHeader username={name} navigation={props.navigation} /> */}
      <TopHeader screenName={"Chat Settings"} navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default ChatSettings;
