import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import styles from "./InputField.styles";

interface InputFieldProps {
  children: string;
  lightTextColor:
    | "titleText"
    | "bodyText"
    | "smallText"
    | "generalGray"
    | "linkText";
  style?: StyleProp<ViewStyle>;
  lightBorderColor: string;
}

export const InputField = (props: InputFieldProps) => {
  const { children, lightTextColor, style, lightBorderColor } = props;

  return (
    <ShadowView style={[style, styles.InputField]} isInnerShadow={false}>
      <View
        style={styles.InputField}
        lightColor={lightBorderColor}
        darkColor={colors.dark.backgroundSecondary}
      >
        <ShadowView
          style={styles.ShadowView}
          isInnerShadow={true}
          lightColor={colors.light.primaryBackgroundOpaque}
          darkColor={colors.dark.primaryBackgroundOpaque}
        >
          <Text
            lightColor={lightTextColor}
            darkColor={colors.light.backgroundSecondary}
            variant="smBody"
            style={styles.Text}
          >
            {children}
          </Text>
        </ShadowView>
      </View>
    </ShadowView>
  );
};

export default InputField;
