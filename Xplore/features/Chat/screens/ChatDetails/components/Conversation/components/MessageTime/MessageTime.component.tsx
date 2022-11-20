import { ViewStyle, StyleProp } from "react-native";
import { Text } from "../../../../../../../../components";

interface MessageTimeProps {
  time: String;
  style?: StyleProp<ViewStyle>;
}

const MessageTime = ({ time, style }: MessageTimeProps) => {
  return (
    <Text variant="smLabel" color="smallText" style={style}>
      {time}
    </Text>
  );
};

export default MessageTime;
