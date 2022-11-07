import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Platform,
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { multiplier } from "../../constants";
import { useThemeColor } from "../../hooks";
import styles from "./TextInput.styles";

interface TextInputProps extends RNTextInputProps {
  placeHolder: string;
  iconName: keyof typeof Feather.glyphMap;
  secureTextEntry?: boolean;
}

export const TextInput = ({
  placeHolder,
  iconName,
  secureTextEntry,
  ...restOfProps
}: TextInputProps) => {
  const generalGray = useThemeColor("generalGray");
  const smallText = useThemeColor("smallText");
  const bodyText = useThemeColor("bodyText");
  const primary = useThemeColor("primary");
  const IconSize = Platform.OS === "ios" ? 24 * multiplier : 24;
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <View
      style={[
        styles.inputWrapper,
        { borderBottomColor: isFocused ? primary : generalGray },
      ]}
    >
      <Feather
        name={iconName}
        size={IconSize}
        color={isFocused ? primary : smallText}
        style={styles.textInputIcon}
      />
      <RNTextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={bodyText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        style={{ color: smallText }}
        {...restOfProps}
      />
    </View>
  );
};
