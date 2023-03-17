import { ChatTextInput, Conversation, View } from "../../../../components";
import styles from "./Discussion.styles";

const ChatDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Conversation />
        <ChatTextInput />
      </View>
    </View>
  );
};

export default ChatDetails;
