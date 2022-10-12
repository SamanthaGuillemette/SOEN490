import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, View, TextInput as RNTextInput } from "react-native";
import { multiplier } from "../../constants";
import { useThemeColor } from "../../hooks";
import styles from "./TextInput.styles";

interface TextInputProps {
  PlaceHolder: any;
  IconName: keyof typeof Feather.glyphMap;
  SecureTextEntry?: boolean;
}

export const TextInput = ({
  PlaceHolder,
  IconName,
  SecureTextEntry,
}: TextInputProps) => {
  const gray77 = useThemeColor("gray77");
  const gray100 = useThemeColor("gray100");
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
        { borderBottomColor: isFocused ? primary : gray77 },
      ]}
    >
      <Feather
        name={IconName}
        size={IconSize}
        color={isFocused ? primary : gray77}
        style={styles.textInputIcon}
      />
      <RNTextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={gray77}
        placeholder={PlaceHolder}
        secureTextEntry={SecureTextEntry}
        style={{ color: gray100 }}
      />
    </View>
  );
};
