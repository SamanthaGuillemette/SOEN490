import { View } from "../View";
import { ShadowView } from "../ShadowView";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { MessageTime } from "../MessageTime";
import styles from "./LeftBubble.styles";

interface LeftBubbleProps {
  text: String;
  msgTime: String;
  image: any;
}

export const LeftBubble = ({ text, msgTime, image }: LeftBubbleProps) => {
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
        <MessageTime time={msgTime} style={styles.msgTime} />
      </ShadowView>
    </View>
  );
};
