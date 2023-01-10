import { TouchableHighlight, Button, Platform } from "react-native";
import styles from "./AddButton.styles";
import { useThemeColor } from "../../hooks";
import { useState } from "react";

export const AddButton = () => {
  const [isPressed, setPressed] = useState(true);
  const primary = useThemeColor("primary");
  const background = useThemeColor("background");
  const success = useThemeColor("success");

  const touchButton = {
    activeOpacity: 1,
    style: isPressed
      ? [styles.buttonNormal, { backgroundColor: primary }]
      : [
          styles.buttonPressed,
          { backgroundColor: background, borderColor: success },
        ],
  };

  return (
    <TouchableHighlight {...touchButton}>
      <Button
        onPress={() => {
          setPressed(false);
        }}
        disabled={!isPressed}
        title={isPressed ? "ADD" : "ADDED"}
        color={Platform.OS === "ios" ? "white" : primary}
      />
    </TouchableHighlight>
  );
};
