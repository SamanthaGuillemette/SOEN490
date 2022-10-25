import { TouchableOpacity } from "react-native";
import { ShadowView, Avatar, View, Text } from "../../../components";
import { useThemeColor } from "../../../hooks";
import styles from "../components/ChatBox.styles";

interface ChatBoxProps {
  image: any;
  username: String;
  lastText?: String;
  time?: String;
}

const ChatBox = ({ image, username, lastText, time }: ChatBoxProps) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <TouchableOpacity>
      <ShadowView
        style={[
          styles.chatBox_container,
          { backgroundColor: backgroundSecondary },
        ]}
      >
        <Avatar image={image} style={styles.chatBox_avatar} />
        <View style={{ backgroundColor: backgroundSecondary }}>
          <Text variant="h3" style={styles.chatBox_username}>
            {username}
          </Text>
          <Text
            variant="smBody"
            color="gray300"
            style={styles.chatBox_lastText}
          >
            {lastText}
          </Text>
        </View>
        <Text variant="smLabel" color="gray300" style={styles.chatBox_time}>
          {time}
        </Text>
      </ShadowView>
    </TouchableOpacity>
  );
};

export default ChatBox;
