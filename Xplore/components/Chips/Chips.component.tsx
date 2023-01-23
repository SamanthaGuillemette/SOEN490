import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { ShadowView } from "../ShadowView/ShadowView.component";
import { Icon } from "../Icon/Icon.component";
import { Text } from "../Text/Text.component";
import { View } from "../View/View.component";
import { ChipsInput, NumberInputProps, Chip } from "react-native-ui-lib";
import styles from "./Chips.styles";
import { useThemeColor } from "../../hooks";
import { colors } from "../../constants";
import { useState } from "react";

interface ChipsProps {
  placeHolder: string;
  styleBox: StyleProp<ViewStyle>;
}

export const Chips = (props: ChipsProps) => {
  const background = useThemeColor("background");
  const generalGray = useThemeColor("generalGray");
  const bodyText = useThemeColor("bodyText");
  const { placeHolder, styleBox } = props;
  const renderCustomTag = (tag: any, _: NumberInputProps) => {
    return (
      <ShadowView
        style={[
          styles.customTag,
          { backgroundColor: background, borderColor: generalGray },
        ]}
      >
        <Text variant="smBody" color="titleText">
          {tag.label}
        </Text>
        <Icon name="x" color="primaryBackgroundOpaque" size="large" />
      </ShadowView>
    );
  };

  const onCreateTag = (value: string) => {
    return { label: value };
  };

  return (
    <ScrollView>
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
            <View style={styles.alignText}>
              <ChipsInput
                placeholder={placeHolder}
                renderTag={renderCustomTag}
                onCreateTag={onCreateTag}
                hideUnderline={true}
                inputStyle={{ color: bodyText }}
              />
            </View>
          </ShadowView>
        </View>
      </ShadowView>
    </ScrollView>
  );
};
