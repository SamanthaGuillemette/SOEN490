import { StyleProp, ViewStyle, TouchableOpacity, Text } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./SecondaryButton.styles";

interface SecondaryButton {
  label: String;
  style?: StyleProp<ViewStyle>;
}

export const SecondaryButton = ({ label, style }: SecondaryButton) => {
  const primary = useThemeColor("primary");
  const bg = useThemeColor("backgroundSecondary");
  return (
    <TouchableOpacity
      style={[
        style,
        styles.button,
        { backgroundColor: bg, borderColor: primary },
      ]}
    >
      <Text style={[styles.textStyle, { color: primary }]}>{label}</Text>
    </TouchableOpacity>
  );
};
