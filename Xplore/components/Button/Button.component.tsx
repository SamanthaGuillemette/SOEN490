import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text } from "../Text";
import styles from "./Button.styles";
import { useThemeColor } from "../../hooks";
interface ButtonProps extends TouchableOpacityProps {
  children: string;
  backgroundColor:
    | "background"
    | "backgroundSecondary"
    | "primary"
    | "primaryBackground";
  textColor: "primary" | "generalGray" | "smallText" | "success";
  borderColor: "primary" | "smallText" | "success";
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    backgroundColor,
    borderColor,
    textColor,
    style,
    ...restOfProps
  } = props;
  const primary = useThemeColor(borderColor);
  const bgColor = useThemeColor(backgroundColor);
  const color = useThemeColor(textColor);

  return (
    <TouchableOpacity
      {...restOfProps}
      style={[
        style,
        styles.Button,
        { borderColor: primary, backgroundColor: bgColor },
      ]}
    >
      <Text style={{ color: color }} variant="smBody">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
