import { Text } from "../Text";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import { Button } from "../Button";
import { BrandIcon } from "../BrandIcon";
import styles from "./IntegrationCard.styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { useThemeColor } from "../../hooks";

interface IntegrationCardProps {
  testID?: string;
  title: string;
  description: string;
  iconName: keyof typeof FontAwesome5.glyphMap;
  btnType: "add" | "added" | "removed"; // USER DOES NOT INPUT REMOVED VALUE EVER!
  bgColor: "white" | "blue";
  editableIntegration?: boolean;
}

export const IntegrationCard = (props: IntegrationCardProps) => {
  const {
    title,
    description,
    btnType,
    bgColor,
    iconName,
    editableIntegration,
    testID = "test",
  } = props;
  const [btnState, setBtnState] = useState(btnType);
  const success = useThemeColor("success");

  const changeIntegrationBtn = () => {
    if (btnState === "add") {
      setBtnState("added");
    } else {
      setBtnState("removed");
      setTimeout(() => {
        setBtnState("add");
      }, 1000);
    }
  };

  return (
    <View testID={testID} style={[styles.container]}>
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

          {editableIntegration ? (
            btnState === "add" ? (
              <Button
                backgroundColor="primary"
                children={"ADD"}
                textColor="generalGray"
                borderColor="primary"
                style={[styles.btn, styles.addBtn]}
                onPress={() => changeIntegrationBtn()}
              />
            ) : btnState === "added" ? (
              <Button
                backgroundColor="background"
                children={"ADDED"}
                textColor="success"
                borderColor="success"
                style={[styles.btn, styles.addedBtn]}
                onPress={() => changeIntegrationBtn()}
              />
            ) : (
              <Button
                backgroundColor="background"
                children={"REMOVED"}
                textColor="primary"
                borderColor="primary"
                style={[styles.btn, styles.removedBtn]}
                onPress={() => changeIntegrationBtn()}
              />
            )
          ) : (
            <View
              backgroundColor="background"
              style={[
                styles.btn,
                styles.addedBtn,
                styles.Button,
                { borderColor: success },
              ]}
            >
              <Text style={{ color: success }} variant="smBody">
                {"ADDED"}
              </Text>
            </View>
          )}
        </View>
      </ShadowView>
    </View>
  );
};
