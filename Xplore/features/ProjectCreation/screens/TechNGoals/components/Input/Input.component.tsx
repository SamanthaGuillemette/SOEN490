import * as React from "react";
import {
  InputField,
  Text,
  ShadowView,
  Icon,
} from "../../../../../../components";
import { View } from "react-native";
import styles from "./Input.styles";
import { useThemeColor } from "../../../../../../hooks";

export const Input = () => {
  const background = useThemeColor("background");
  const borderColor = useThemeColor("generalGray");

  return (
    <View style={styles.positionRelative}>
      <View style={styles.container}>
        <InputField style={styles.projectTech} styleText={styles.styleTextTech}>
          J
        </InputField>
      </View>

      <View style={styles.alignTag}>
        <ShadowView
          style={[
            styles.figmaTag,
            styles.alignCenter,
            styles.alignItems,
            { backgroundColor: background, borderColor: borderColor },
          ]}
        >
          <Text variant="smBody" color="titleText">
            Figma
          </Text>
          <Icon name="x" color="primaryBackgroundOpaque" size="large" />
        </ShadowView>
      </View>

      <View style={styles.container}>
        <InputField
          style={styles.projectGoals}
          styleText={styles.styleTextGoals}
        >
          Project Goals
        </InputField>
      </View>

      <View style={(styles.alignTag, styles.alignDropdown)}>
        <ShadowView
          style={[
            styles.jTag,
            styles.alignJTag,
            { backgroundColor: background, borderColor: borderColor },
          ]}
        >
          <Text variant="smBody" color="titleText" style={styles.alignJTagText}>
            Jest
          </Text>
          <Text variant="smBody" color="titleText" style={styles.alignJTagText}>
            Jira
          </Text>
        </ShadowView>
      </View>
    </View>
  );
};
