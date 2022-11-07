import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./PrimaryButton.styles";

interface PrimaryButtonProps extends TouchableOpacityProps {
  label: String;
  style?: StyleProp<ViewStyle>;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { label, style, ...restOfProps } = props;
  const primary = useThemeColor("primary");

  return (
    <TouchableOpacity
      style={[style, styles.button, { backgroundColor: primary }]}
      {...restOfProps}
    >
      <Text variant="label" style={styles.textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
