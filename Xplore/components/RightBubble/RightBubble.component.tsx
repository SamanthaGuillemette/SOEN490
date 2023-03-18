import React from "react";
import { ShadowView } from "../ShadowView";
import { View } from "../View";
import { Text } from "../Text";
import { Avatar } from "../Avatar";
import { MessageTime } from "../MessageTime";
import styles from "./RightBubble.styles";

interface RightBubbleProps {
  text: String;
  msgTime: String;
  image: any;
}

export const RightBubble = ({ text, msgTime, image }: RightBubbleProps) => {
  return (
    <View backgroundColor="background" style={styles.bubbleContainer}>
      <ShadowView style={styles.rightBubble}>
        <Text variant="body">{text}</Text>
        <MessageTime time={msgTime} style={styles.msgTime} />
      </ShadowView>
      <View backgroundColor="background">
        <Avatar
          name="Username"
          size={45}
          imageURL={image}
          style={styles.rightBubbleAvatar}
        />
      </View>
    </View>
  );
};
