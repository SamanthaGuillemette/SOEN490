import { StyleProp, ViewStyle } from "react-native";
import { Text } from "../Text";
import { View } from "../View";
import styles from "./Button.styles";
import { useThemeColor } from "../../hooks";
interface ButtonProps {
  children: string;
  backgroundColor: "backgroundSecondary" | "primary";
  textColor: "primary" | "generalGray";
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const { children, backgroundColor, textColor, style } = props;
  const primary = useThemeColor("primary");
  const color = useThemeColor(textColor);

  return (
    <View
      backgroundColor={backgroundColor}
      style={[style, styles.Button, { borderColor: primary }]}
    >
      <Text style={{ color: color }} variant="smBody">
        {children}
      </Text>
    </View>
  );
};

export default Button;
