import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDetailsHeader from "./components/ChatDetailsHeader/ChatDetailsHeader.component";
import Conversation from "./components/Conversation/Conversation.component";
import ChatTextInput from "./components/ChatTextInput/ChatTextInput.component";
import styles from "./ChatDetails.styles";

interface ChatDetailsProps {
  navigation: NavigationProp<any>;
  chatID: string;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { name, chatID }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader username={name} navigation={props.navigation} />
      <Conversation chatID={chatID} navigation={props.navigation} />
      <ChatTextInput chatID={chatID} />
    </SafeAreaView>
  );
};

export default ChatDetails;
