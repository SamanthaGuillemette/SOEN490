import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRef } from "react";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDate from "../../components/Conversation/components/ChatDate/ChatDate.Component";
import LeftBubble from "../../components/Conversation/components/LeftBubble/LeftBubble.Component";
import RightBubble from "../../components/Conversation/components/RightBubble/RightBubble.Component";
import styles from "./Conversation.styles";
interface ConversationProps {
  navigation: NavigationProp<any>;
}

const Conversation = ({}: ConversationProps) => {
  const background = useThemeColor("background");
  const scrollViewRef: any = useRef();
  return (
    <ScrollView
      style={[styles.messages_container, { backgroundColor: background }]}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
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
  );
};

export default Conversation;
