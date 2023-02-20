import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./NextButton.styles";

interface NextButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const NextButton = (props: NextButtonProps) => {
  const { style, ...restOfProps } = props;
  const primary = useThemeColor("primary");

  return (
    <TouchableOpacity
      style={[style, styles.nextButton, { backgroundColor: primary }]}
      {...restOfProps}
    >
      <Text variant="label" style={styles.textStyle}>
        {"NEXT"}
      </Text>
    </TouchableOpacity>
  );
};
