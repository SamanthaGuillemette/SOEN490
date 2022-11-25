import { NavigationProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useRef } from "react";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDate from "./components/ChatDate/ChatDate.component";
import LeftBubble from "./components/LeftBubble/LeftBubble.component";
import RightBubble from "./components/RightBubble/RightBubble.component";
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
      <LeftBubble text="hello" image="https://picsum.photos/200" />
      <LeftBubble text="It's Meeee" image="https://picsum.photos/200" />
      <LeftBubble
        text="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..."
        image="https://picsum.photos/200"
      />
      <RightBubble text="Alright" image="https://picsum.photos/200" />
      <RightBubble text="OKAYYYYYYYYY" image="https://picsum.photos/200" />
      <RightBubble
        text="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur..."
        image="https://picsum.photos/200"
      />
      <LeftBubble text="OHH" image="https://picsum.photos/200" />
    </ScrollView>
  );
};

export default Conversation;
