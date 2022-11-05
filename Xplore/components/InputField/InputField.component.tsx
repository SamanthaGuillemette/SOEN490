import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { ShadowView } from "../ShadowView";
import { View } from "../View";
import styles from "./InputField.styles";
import { useThemeColor } from "../../hooks";

interface InputFieldProps {
  children: string;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  textColor?: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
}

export const InputField = (props: InputFieldProps) => {
  const { children, backgroundColor, textColor, style } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");

  return (
    <ShadowView style={[style, styles.ShadowView]}>
      <View
        backgroundColor={backgroundColor}
        style={[styles.InputField, { borderColor: whiteBackground }]}
      >
        <Text color={textColor} variant="smBody" style={styles.Text}>
          {children}
        </Text>
      </View>
    </ShadowView>
  );
};

export default InputField;
