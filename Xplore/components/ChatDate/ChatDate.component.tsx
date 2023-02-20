import { Text } from "../Text";
import { View } from "../View";
import styles from "./ChatDate.styles";

interface ChatDateProps {
  date: String;
}

export const ChatDate = ({ date }: ChatDateProps) => {
  return (
    <View backgroundColor="background" style={styles.chatDateContainer}>
      <Text color="titleText" variant="body">
        {date}
      </Text>
    </View>
  );
};
