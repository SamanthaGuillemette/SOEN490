import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./SecondaryButton.styles";

interface SecondaryButtonProps extends TouchableOpacityProps {
  label: String;
  style?: StyleProp<ViewStyle>;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { label, style, ...restOfProps } = props;
  const primary = useThemeColor("primary");
  const bg = useThemeColor("backgroundSecondary");
  return (
    <TouchableOpacity
      style={[
        style,
        styles.button,
        { backgroundColor: bg, borderColor: primary },
      ]}
      {...restOfProps}
    >
      <Text variant="label" style={[styles.textStyle, { color: primary }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
