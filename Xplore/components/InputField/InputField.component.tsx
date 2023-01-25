import {
  StyleProp,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { ShadowView } from "../ShadowView";
import styles from "./InputField.styles";
import { useThemeColor } from "../../hooks";

interface InputFieldProps extends RNTextInputProps {
  placeHolder: string;
  styleBox: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
}

export const InputField = (props: InputFieldProps) => {
  const { placeHolder, styleBox, styleText, ...restOfProps } = props;
  const bodyText = useThemeColor("bodyText");
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <ShadowView
      style={[
        styles.ShadowView,
        styleBox,
        { borderColor: backgroundSecondary },
      ]}
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
  );
};

export default InputField;
