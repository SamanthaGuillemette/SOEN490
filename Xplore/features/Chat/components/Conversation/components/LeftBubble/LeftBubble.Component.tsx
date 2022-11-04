import { View, ShadowView, Text, Avatar } from "../../../../../../components";
import MessageTime from "../MessageTime/MessageTime.Component";
import styles from "./LeftBubble.styles";

interface LeftBubbleProps {
  text: String;
  image: any;
}

const LeftBubble = ({ text, image }: LeftBubbleProps) => {
  return (
    <View backgroundColor="background" style={styles.bubbleContainer}>
      <ShadowView style={styles.leftBubble}>
        <Text variant="body">{text}</Text>
        <MessageTime time={"11:11 PM"} style={styles.msgTime} />
      </ShadowView>
      <Avatar image={image} style={styles.leftBubbleAvatar} />
    </View>
  );
};

export default LeftBubble;
