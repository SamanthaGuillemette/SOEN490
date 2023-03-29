import { View } from "../View";
import { ShadowView } from "../ShadowView";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { MessageTime } from "../MessageTime";
import styles from "./LeftBubble.styles";

interface LeftBubbleProps {
  text: string;
  username: string;
  msgTime: string;
  image: string;
}

export const LeftBubble = ({
  text,
  username,
  msgTime,
  image,
}: LeftBubbleProps) => {
  return (
    <View backgroundColor="background" style={styles.bubbleContainer}>
      <View backgroundColor="background">
        <Avatar
          name={username}
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
