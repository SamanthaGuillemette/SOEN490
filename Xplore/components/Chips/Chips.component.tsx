import { ScrollView } from "react-native";
import { ShadowView } from "../ShadowView/ShadowView.component";
import { Icon } from "../Icon/Icon.component";
import { Text } from "../Text/Text.component";
import { ChipsInput, NumberInputProps } from "react-native-ui-lib";
import styles from "./Chips.styles";
import { useThemeColor } from "../../hooks";

interface ChipsProps {
  placeHolder: string;
}

export const Chips = (props: ChipsProps) => {
  const background = useThemeColor("background");
  const generalGray = useThemeColor("generalGray");
  const primaryBackgroundOpaque = useThemeColor("primaryBackgroundOpaque");
  const bodyText = useThemeColor("bodyText");
  const { placeHolder } = props;

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
      <ChipsInput
        placeholder={placeHolder}
        tags={""}
        renderTag={renderCustomTag}
        onCreateTag={onCreateTag}
        inputStyle={{
          color: bodyText,
          backgroundColor: primaryBackgroundOpaque,
        }}
        hideUnderline={true}
      />
    </ScrollView>
  );
};
