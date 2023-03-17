import { TouchableOpacity } from "react-native";
import { ShadowView, Avatar, View, Text } from "../../../../../../components";
import { useThemeColor } from "../../../../../../hooks";
import styles from "./ChatBox.styles";

interface ChatBoxProps {
  image: string;
  username: String;
  chatType?: String;
  lastText?: String;
  seen?: Boolean;
  time?: String;
  onPress?: any;
}

const ChatBox = ({
  image,
  username,
  chatType,
  lastText,
  seen,
  time,
  ...restOfProps
}: ChatBoxProps) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <TouchableOpacity {...restOfProps}>
      <ShadowView
        style={[
          styles.chatBox_container,
          { backgroundColor: backgroundSecondary },
        ]}
      >
        {chatType === "group" ? (
          <Avatar
            name="Username"
            groupChat={true}
            size={45}
            style={styles.chatBox_avatar}
          />
        ) : (
          <Avatar
            name="Username"
            imageURL={image}
            size={45}
            style={styles.chatBox_avatar}
          />
        )}
        <View style={{ backgroundColor: backgroundSecondary }}>
          <Text variant="h3" style={styles.chatBox_username}>
            {username}
          </Text>
          <Text
            variant="smBody"
            color={seen ? "smallText" : "titleText"}
            style={styles.chatBox_lastText}
          >
            {lastText}
          </Text>
        </View>
        <Text variant="smLabel" color="smallText" style={styles.chatBox_time}>
          {time}
        </Text>
      </ShadowView>
    </TouchableOpacity>
  );
};

export default ChatBox;
