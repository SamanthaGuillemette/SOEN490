import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { View } from "../View";
import styles from "./Button.styles";

interface ButtonProps {
  children: string;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  textColor?: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const { children, backgroundColor, textColor, style } = props;

  return (
    <View backgroundColor={backgroundColor} style={[style, styles.Button]}>
      <Text color={textColor} variant="smBody">
        {children}
      </Text>
    </View>
  );
};

export default Button;
