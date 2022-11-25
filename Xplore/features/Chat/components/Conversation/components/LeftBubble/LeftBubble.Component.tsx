import { View, ShadowView, Text, Avatar } from "../../../../../../components";
import MessageTime from "../MessageTime/MessageTime.component";
import styles from "./LeftBubble.styles";

interface LeftBubbleProps {
  text: String;
  image: any;
}

const LeftBubble = ({ text, image }: LeftBubbleProps) => {
  return (
    <View backgroundColor="background" style={styles.bubbleContainer}>
      <View backgroundColor="background">
        <Avatar
          name="Username"
          size={45}
          imageURL={image}
          style={styles.leftBubbleAvatar}
        />
      </View>
      <ShadowView style={styles.leftBubble}>
        <Text variant="body">{text}</Text>
        <MessageTime time={"11:11 PM"} style={styles.msgTime} />
      </ShadowView>
    </View>
  );
};

export default LeftBubble;
