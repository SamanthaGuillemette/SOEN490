import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import Conversation from "../../components/Conversation/Conversation.Component";
import ChatTextInput from "../../components/ChatTextInput/ChatTextInput.Component";
import styles from "./ChatDetails.styles";
import { TopHeader } from "../../../../components";

interface ChatDetailsProps {
  navigation: NavigationProp<any>;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  const onPressPhone = () => console.log("phone icon clicked");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader
        children={ChatInformation}
        title={name}
        iconNames={["phone", "more-vertical"]}
        iconColors={["primary", "primary"]}
        navArrow={props.navigation}
        isChat={true}
        icon1OnPressFunc={onPressPhone}
        icon2OnPressFunc={() => console.log("more-vertical icon clicked")}
      />
    </SafeAreaView>
  );
};

export default ChatDetails;

const ChatInformation = () => {
  return (
    <>
      <Conversation />
      <ChatTextInput />
    </>
  );
};
