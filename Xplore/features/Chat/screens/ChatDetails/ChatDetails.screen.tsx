import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDetailsHeader from "./components/ChatDetailsHeader/ChatDetailsHeader.component";
import Conversation from "./components/Conversation/Conversation.component";
import ChatTextInput from "./components/ChatTextInput/ChatTextInput.component";
import styles from "./ChatDetails.styles";
import { SafeAreaView } from "react-native-safe-area-context";

interface ChatDetailsProps {
  navigation: NavigationProp<any>;
  chatID: string;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { chatID }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader username={chatID} navigation={props.navigation} />
      <Conversation chatID={chatID} navigation={props.navigation} />
      <ChatTextInput chatID={chatID} />
    </SafeAreaView>
  );
};

export default ChatDetails;
