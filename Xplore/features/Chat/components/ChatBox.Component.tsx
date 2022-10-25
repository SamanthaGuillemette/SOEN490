import { ShadowView, Avatar } from "../../../components";
import { TouchableOpacity } from "react-native";
import styles from "../components/ChatBox.styles";

interface ChatBoxProps {}

const ChatBox = ({}: ChatBoxProps) => {
  return (
    <TouchableOpacity>
      <ShadowView style={styles.chatBox_container}>
        <Avatar image={require("../../../assets/users/josh.jpg")} />
      </ShadowView>
    </TouchableOpacity>
  );
};

export default ChatBox;
