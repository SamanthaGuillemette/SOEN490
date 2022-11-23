import { TouchableHighlight, Button } from "react-native";
import styles from "./AddButton.styles";
import { useState } from "react";

interface AddButtonProps {}

export const AddButton = (props: AddButtonProps) => {
  const [isPressed, setPressed] = useState(true);
  const touchButton = {
    activeOpacity: 1,
    style: isPressed ? styles.buttonNormal : styles.buttonPressed,
  };

  return (
    <TouchableHighlight {...touchButton}>
      <Button
        onPress={() => {
          setPressed(false);
        }}
        disabled={!isPressed}
        title={isPressed ? "ADD" : "ADDED"}
        color="white"
      />
    </TouchableHighlight>
  );
};
