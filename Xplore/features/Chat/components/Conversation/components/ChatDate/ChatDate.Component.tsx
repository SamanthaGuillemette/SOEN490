import { Text, View } from "../../../../../../components";
import styles from "./ChatDate.styles";

interface ChatDateProps {
  date: String;
}

const ChatDate = ({ date }: ChatDateProps) => {
  return (
    <View backgroundColor="background" style={styles.chatDateContainer}>
      <Text color="titleText" variant="body">
        {date}
      </Text>
    </View>
  );
};

export default ChatDate;
