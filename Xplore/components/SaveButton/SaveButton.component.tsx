import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./SaveButton.styles";

interface SaveButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const SaveButton = (props: SaveButtonProps) => {
  const { style, ...restOfProps } = props;
  const primary = useThemeColor("primary");

  return (
    <TouchableOpacity
      style={[style, styles.saveButton, { backgroundColor: primary }]}
      {...restOfProps}
    >
      <Text variant="label" style={styles.textStyle}>
        {"SAVE"}
      </Text>
    </TouchableOpacity>
  );
};
