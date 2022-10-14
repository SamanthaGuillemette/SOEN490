import { StyleProp, ViewStyle, TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
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
      <Text variant="label" style={styles.textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
