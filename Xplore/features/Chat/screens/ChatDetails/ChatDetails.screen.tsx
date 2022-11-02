import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDate from "../../components/ChatDate/ChatDate.Component";
import ChatDetailsHeader from "../../components/ChatDetailsHeader/ChatDetailsHeader.Comonent";
import LeftBubble from "../../components/LeftBubble/LeftBubble.Component";
import RightBubble from "../../components/RightBubble/RightBubble.Component";
import styles from "./ChatDetails.styles";
interface ChatDetailsProps {
  navigation: NavigationProp<any>;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader username={name} navigation={props.navigation} />
      <ScrollView
        style={[styles.messages_container, { backgroundColor: background }]}
      >
        <ChatDate date={"Jun 25, 2022"} />
        <LeftBubble
          text="hello"
          image={require("../../../../assets/users/josh.jpg")}
        />
        <LeftBubble
          text="It's Meeee"
          image={require("../../../../assets/users/josh.jpg")}
        />
        <LeftBubble
          text="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..."
          image={require("../../../../assets/users/josh.jpg")}
        />
        <RightBubble
          text="Alright"
          image={require("../../../../assets/users/josh.jpg")}
        />
        <RightBubble
          text="OKAYYYYYYYYY"
          image={require("../../../../assets/users/josh.jpg")}
        />
        <RightBubble
          text="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..."
          image={require("../../../../assets/users/josh.jpg")}
        />
        <LeftBubble
          text="OHH"
          image={require("../../../../assets/users/josh.jpg")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatDetails;
