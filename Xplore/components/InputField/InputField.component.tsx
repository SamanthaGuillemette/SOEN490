import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { View } from "../View";

interface InputFieldProps {
  children: string;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
  textColor?: keyof typeof colors.light & keyof typeof colors.dark;
}

export const InputField = (props: InputFieldProps) => {
  const { children, backgroundColor, style, textColor } = props;

  return (
    <View backgroundColor={backgroundColor} style={style}>
      <Text variant="link" color={textColor}>
        {children}
      </Text>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  linkButtonText: {
    textDecorationLine: "underline",
  },
});
