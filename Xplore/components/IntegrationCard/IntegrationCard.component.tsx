import * as React from "react";
import { Text } from "../Text";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import { Button } from "../Button";
import { BrandIcon } from "../BrandIcon";
import styles from "./IntegrationCard.styles";
import { useThemeColor } from "../../hooks";
import { FontAwesome5 } from "@expo/vector-icons";

interface IntegrationCardProps {
  testID: string;
  title: string;
  description: string;
  iconName: keyof typeof FontAwesome5.glyphMap;
  btnType: "add" | "added";
  bgColor: "white" | "blue";
}

export const IntegrationCard = (props: IntegrationCardProps) => {
  const { title, description, btnType, bgColor, iconName } = props;
  const success = useThemeColor("success");

  return (
    <View style={[styles.container]}>
      <ShadowView style={[styles.boxSize]}>
        <View
          backgroundColor={
            bgColor === "white"
              ? "backgroundSecondary"
              : "primaryBackgroundOpaque"
          }
          style={[styles.boxSize]}
        >
          <Text variant="h3" color="titleText" style={styles.alignTitle}>
            {title}
          </Text>
          <BrandIcon
            name={iconName}
            color="primaryBackgroundOpaque"
            style={styles.alignIcon}
          />
          <Text variant="smBody" color="bodyText" style={styles.alignDesc}>
            {description}
          </Text>
          {btnType === "add" ? (
            <Button
              backgroundColor="primary"
              children={"ADD"}
              textColor="generalGray"
              style={[styles.btn, styles.addBtn]}
            />
          ) : (
            <View
              backgroundColor={"background"}
              style={[styles.btn, styles.addedBtn, { borderColor: success }]}
            >
              <Text style={{ color: success }} variant="smBody">
                ADDED
              </Text>
            </View>
          )}
        </View>
      </ShadowView>
    </View>
  );
};
