import { Feather } from "@expo/vector-icons";
import { View, TextInput as RNTextInput } from "react-native";
import { Icon } from "../../components";
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
  const primary = useThemeColor("primary");
  return (
    <View style={[styles.inputWrapper, { borderBottomColor: gray77 }]}>
      <Icon name={IconName} color="gray77" style={styles.textInputIcon} />
      <RNTextInput
        placeholderTextColor={gray77}
        placeholder={PlaceHolder}
        secureTextEntry={SecureTextEntry}
        selectionColor={primary}
      />
    </View>
  );
};
