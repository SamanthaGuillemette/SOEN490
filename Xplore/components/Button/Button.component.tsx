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
  backgroundColor: "background" | "backgroundSecondary" | "primary";
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
  const borderC = useThemeColor(borderColor);
  const bgColor = useThemeColor(backgroundColor);
  const textC = useThemeColor(textColor);

  return (
    <TouchableOpacity
      {...restOfProps}
      style={[
        style,
        styles.Button,
        { borderColor: borderC, backgroundColor: bgColor },
      ]}
    >
      <Text style={{ color: textC }} variant="smBody">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
