import { View, ShadowView, Text, Avatar } from "../../../../components";
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
      </ShadowView>
      <Avatar image={image} style={styles.leftBubbleAvatar} />
    </View>
  );
};

export default LeftBubble;
