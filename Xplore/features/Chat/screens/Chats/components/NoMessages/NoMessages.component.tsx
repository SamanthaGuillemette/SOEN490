import { View, Text, Icon } from "../../../../../../components";
import styles from "./NoMessages.styles";

const NoMessages = () => {
  return (
    <View style={styles.noMessagesView}>
      <Text variant="h2" color="bodyText">
        {" "}
        No Chats! <Icon name="meh" size="medium" color="primary" />
      </Text>
      <Text style={styles.secondText} variant="h3" color="smallText">
        {" "}
        Start a conversation and your chats will show here.{" "}
      </Text>
    </View>
  );
};

export default NoMessages;
