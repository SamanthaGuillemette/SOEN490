import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { View } from "../View";
import styles from "./Button.styles";
import { useThemeColor } from "../../hooks";
interface ButtonProps {
  children: string;
  backgroundColor: keyof typeof colors.light & keyof typeof colors.dark;
  textColor:
    | "titleText"
    | "bodyText"
    | "smallText"
    | "generalGray"
    | "linkText";
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const { children, backgroundColor, textColor, style } = props;
  const primary = useThemeColor("primary");

  return (
    <View
      backgroundColor={backgroundColor}
      style={[style, styles.Button, { borderColor: primary }]}
    >
      <Text color={textColor} variant="smBody">
        {children}
      </Text>
    </View>
  );
};

export default Button;
