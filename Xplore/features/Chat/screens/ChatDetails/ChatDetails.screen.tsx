import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDetailsHeader from "../../components/ChatDetailsHeader/ChatDetailsHeader.Comonent";
import Conversation from "../../components/Conversation/Conversation.Component";
import ChatTextInput from "../../components/ChatTextInput/ChatTextInput.Component";
import styles from "./ChatDetails.styles";
interface ChatDetailsProps {
  navigation: NavigationProp<any>;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader username={name} navigation={props.navigation} />
      <Conversation navigation={name} />
      <ChatTextInput />
    </SafeAreaView>
  );
};

export default ChatDetails;
