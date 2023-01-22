import { View } from "react-native";
import { Button } from "../../../components";
import styles from "./EditBox.styles";

const SaveButton = () => {
  return (
    <View style={styles.SaveBtnView}>
      <Button
        style={styles.SaveBtn}
        backgroundColor="primary"
        textColor="generalGray"
        borderColor="primary"
      >
        SAVE
      </Button>
    </View>
  );
};

export default SaveButton;
