import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDetailsHeader from "./components/ChatDetailsHeader/ChatDetailsHeader.component";
import { Conversation, ChatTextInput } from "../../../../components";
import styles from "./ChatDetails.styles";
import { SafeAreaView } from "react-native-safe-area-context";

interface ChatDetailsProps {
  navigation: NavigationProp<any>;
  username: string;
  chatID: string;
  chatType: string;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { chatType, chatID, username }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader
        chatID={chatID}
        username={username}
        chatType={chatType}
        navigation={props.navigation}
      />
      <Conversation chatID={chatID} />
      <ChatTextInput chatID={chatID} />
    </SafeAreaView>
  );
};

export default ChatDetails;
