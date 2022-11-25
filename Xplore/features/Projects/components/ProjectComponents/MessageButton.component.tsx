import { TouchableHighlight, Button } from "react-native";
import styles from "./MessageButton.styles";

const MessageButton = () => {
  const touchButton = {
    activeOpacity: 1,
    style: styles.button,
  };

  return (
    <TouchableHighlight {...touchButton}>
      <Button title={"Message"} color="white" />
    </TouchableHighlight>
  );
};

export default MessageButton;
