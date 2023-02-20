import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDetailsHeader from "./components/ChatDetailsHeader/ChatDetailsHeader.component";
import { ChatTextInput, Conversation } from "../../../../components";
import styles from "./ChatDetails.styles";
import { SafeAreaView } from "react-native-safe-area-context";

interface ChatDetailsProps {
  navigation: NavigationProp<any>;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader username={name} navigation={props.navigation} />
      <Conversation navigation={name} />
      <ChatTextInput />
    </SafeAreaView>
  );
};

export default ChatDetails;
