import React from "react";
import { View, ShadowView, Text, Avatar } from "../../../../../../components";
import MessageTime from "../MessageTime/MessageTime.Component";
import styles from "./RightBubble.styles";

interface RightBubbleProps {
  text: String;
  image: any;
}

const LeftBubble = ({ text, image }: RightBubbleProps) => {
  return (
    <View backgroundColor="background" style={styles.bubbleContainer}>
      <ShadowView style={styles.rightBubble}>
        <Text variant="body">{text}</Text>
        <MessageTime time={"11:11 PM"} style={styles.msgTime} />
      </ShadowView>
      <View backgroundColor="background">
        <Avatar image={image} style={styles.rightBubbleAvatar} />
      </View>
    </View>
  );
};

export default LeftBubble;
