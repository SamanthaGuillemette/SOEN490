import { Text } from "../Text";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import { Button } from "../Button";
import { BrandIcon } from "../BrandIcon";
import styles from "./IntegrationCard.styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

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
  const [btnState, setBtnState] = useState(btnType);

  const changeIntegrationBtn = () => {
    if (btnState === "add") {
      setBtnState("added");
    } else {
      setBtnState("add");
    }
  };

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
          {btnState === "add" ? (
            <Button
              backgroundColor="primary"
              children={"ADD"}
              textColor="generalGray"
              borderColor="primary"
              style={[styles.btn, styles.addBtn]}
              onPress={() => changeIntegrationBtn()}
            />
          ) : (
            <Button
              backgroundColor="background"
              children={"ADDED"}
              textColor="success"
              borderColor="success"
              style={[styles.btn, styles.addedBtn]}
              onPress={() => changeIntegrationBtn()}
            />
          )}
        </View>
      </ShadowView>
    </View>
  );
};
