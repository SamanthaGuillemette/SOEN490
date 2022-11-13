import { SafeAreaView } from "react-native";
import TopHeader from "../../../../navigation/TopHeader.component";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import { Text, View } from "../../../../components";
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
      </View>
    </SafeAreaView>
  );
};

export default ChatSettings;
