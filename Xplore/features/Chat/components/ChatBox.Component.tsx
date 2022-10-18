import { ShadowView } from "../../../components";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styles from "../components/ChatBox.styles";

interface ChatBoxProps {}

const ChatBox = ({}: ChatBoxProps) => {
  return (
    <TouchableOpacity>
      <ShadowView style={styles.chatBox_container}>
        <Avatar.Text size={40} label="JS" />
      </ShadowView>
    </TouchableOpacity>
  );
};

export default ChatBox;
