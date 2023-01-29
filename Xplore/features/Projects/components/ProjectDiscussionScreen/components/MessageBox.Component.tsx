import React from "react";
import { View, ShadowView, Text, Avatar } from "../../../../../components";
import styles from "./MessageBox.Styles";

interface MessageBoxProps {
  text: String;
  image: any;
  SR: boolean;
}

const MessageBox = ({ text, image, SR }: MessageBoxProps) => {
  return (
    <View>
      {SR ? (
        <View backgroundColor="background" style={styles.bubbleContainerLeft}>
          <View>
            <Avatar
              name="Username"
              size={45}
              imageURL={image}
              style={styles.leftBubbleAvatar}
            />
          </View>
          <ShadowView style={styles.leftBubble}>
            <Text variant="body">{text}</Text>
          </ShadowView>
        </View>
      ) : (
        <View backgroundColor="background" style={styles.bubbleContainerRight}>
          <ShadowView style={styles.rightBubble}>
            <Text variant="body">{text}</Text>
          </ShadowView>
          <View>
            <Avatar
              name="Username"
              size={45}
              imageURL={image}
              style={styles.rightBubbleAvatar}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default MessageBox;
