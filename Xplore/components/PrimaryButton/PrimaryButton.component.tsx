import { StyleProp, ViewStyle, TouchableOpacity, Text } from "react-native";
import { useThemeColor } from "../../hooks";
import styles from "./PrimaryButton.styles";

interface PrimaryButtonProps {
  label: String;
  style?: StyleProp<ViewStyle>;
}

export const PrimaryButton = ({ label, style }: PrimaryButtonProps) => {
  const primary = useThemeColor("primary");
  return (
    <TouchableOpacity
      style={[style, styles.button, { backgroundColor: primary }]}
    >
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
