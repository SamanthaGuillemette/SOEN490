import { StyleProp, ViewStyle, TextInput as RNTextInput } from "react-native";
import { colors } from "../../constants";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import styles from "./InputField.styles";
import { useState } from "react";
import { useThemeColor } from "../../hooks";

interface InputFieldProps {
  children: string;
  styleBox?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
}

export const InputField = (props: InputFieldProps) => {
  const { children, styleBox, styleText } = props;
  const bodyText = useThemeColor("bodyText");

  return (
    <ShadowView style={[styleBox, styles.InputField]} isInnerShadow={false}>
      <View
        style={styles.InputField}
        darkColor={colors.dark.backgroundSecondary}
      >
        <ShadowView
          style={styles.ShadowView}
          isInnerShadow={true}
          lightColor={colors.light.primaryBackgroundOpaque}
          darkColor={colors.dark.primaryBackgroundOpaque}
        >
          <RNTextInput
            placeholderTextColor={bodyText}
            placeholder={children}
            style={[styles.Text, styleText, { color: bodyText }]}
          />
        </ShadowView>
      </View>
    </ShadowView>
  );
};

export default InputField;
