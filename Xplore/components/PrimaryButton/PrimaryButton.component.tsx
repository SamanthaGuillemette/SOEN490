import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./PrimaryButton.styles";

interface PrimaryButtonProps {
  label: String;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const PrimaryButton = ({
  label,
  style,
  onPress,
}: PrimaryButtonProps) => {
  const primary = useThemeColor("primary");
  return (
    <TouchableOpacity
      style={[style, styles.button, { backgroundColor: primary }]}
      onPress={onPress}
    >
      <Text variant="label" style={styles.textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
