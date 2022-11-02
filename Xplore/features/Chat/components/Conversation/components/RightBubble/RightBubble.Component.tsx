import { View, ShadowView, Text, Avatar } from "../../../../../../components";
import styles from "./RightBubble.styles";

interface RightBubbleProps {
  text: String;
  image: any;
}

const LeftBubble = ({ text, image }: RightBubbleProps) => {
  return (
    <View backgroundColor="background" style={styles.bubbleContainer}>
      <Avatar image={image} style={styles.rightBubbleAvatar} />
      <ShadowView style={styles.rightBubble}>
        <Text variant="body">{text}</Text>
      </ShadowView>
    </View>
  );
};

export default LeftBubble;
