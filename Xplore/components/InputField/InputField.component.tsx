import { StyleSheet } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { ShadowView } from "../ShadowView";
import { View } from "../View";

interface InputFieldProps {
  children: string;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  textColor?: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
}

export const InputField = (props: InputFieldProps) => {
  const { children, backgroundColor, textColor, style } = props;

  return (
    <ShadowView style={[style, styles.ShadowView]}>
      <View backgroundColor={backgroundColor} style={styles.InputField}>
        <Text color={textColor} variant="smBody" style={styles.Text}>
          {children}
        </Text>
      </View>
    </ShadowView>
  );
};

export default InputField;

const styles = StyleSheet.create({
  Text: {
    marginLeft: 10,
  },
  ShadowView: {
    borderRadius: 4,
  },
  InputField: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 4,
  },
});
