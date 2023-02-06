import { ViewStyle, StyleProp } from "react-native";
import { Text } from "../Text";

interface MessageTimeProps {
  time: String;
  style?: StyleProp<ViewStyle>;
}

export const MessageTime = ({ time, style }: MessageTimeProps) => {
  return (
    <Text variant="smLabel" color="smallText" style={style}>
      {time}
    </Text>
  );
};
