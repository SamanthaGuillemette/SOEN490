import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import Conversation from "./components/Conversation/Conversation.component";
import ChatTextInput from "./components/ChatTextInput/ChatTextInput.component";
import styles from "./ChatDetails.styles";
import { TopHeader } from "../../../../components";

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
      <TopHeader
        screenName={name}
        navigation={props.navigation}
        iconNames={["phone", "more-vertical"]}
        iconColors={["primary", "primary"]}
        isUserActive={false}
        isChat={true}
        children={() => <ChatDetailsCoreScreen name={name} />}
        onPressIcon1={() => console.log("phone icon clicked")}
        onPressIcon2={() =>
          props.navigation.navigate("ChatSettings", { name: name })
        }
      />
    </SafeAreaView>
  );
};

export default ChatDetails;

const ChatDetailsCoreScreen = (name: any) => {
  return (
    <>
      <Conversation navigation={name} />
      <ChatTextInput />
    </>
  );
};
