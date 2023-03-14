import {
  StyleProp,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { colors } from "../../constants";
import { View } from "../View";
import { Text } from "../Text";
import { ShadowView } from "../ShadowView";
import styles from "./LabelledInputField.styles";
import { useThemeColor } from "../../hooks";

interface LabelledInputFieldProps extends RNTextInputProps {
  labelTitle: string;
  placeHolder: string;
  styleBox: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
}

export const LabelledInputField = (props: LabelledInputFieldProps) => {
  const { labelTitle, placeHolder, styleBox, styleText, ...restOfProps } =
    props;
  const bodyText = useThemeColor("bodyText");

  return (
    <>
      <Text variant="smLabel" color={"smallText"}>
        {labelTitle.toUpperCase()}
      </Text>
      <ShadowView style={[styleBox, styles.InputField]} isInnerShadow={false}>
        <View
          style={styles.InputField}
          darkColor={colors.dark.backgroundSecondary}
        >
          <ShadowView
            style={styles.ShadowView}
            isInnerShadow={true}
            backgroundColor={"primaryBackgroundOpaque"}
          >
            <RNTextInput
              placeholderTextColor={bodyText}
              placeholder={placeHolder}
              style={[styles.Text, styleText, { color: bodyText }]}
              {...restOfProps}
            />
          </ShadowView>
        </View>
      </ShadowView>
    </>
  );
};

export default LabelledInputField;
