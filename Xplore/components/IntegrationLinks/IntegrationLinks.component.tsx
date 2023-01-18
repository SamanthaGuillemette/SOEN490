import * as React from "react";
import { Text } from "../Text";
import { View } from "../View";
import { ShadowView } from "../ShadowView";
import { Button } from "../Button";
import styles from "./IntegrationLinks.styles";
import { useThemeColor } from "../../hooks";

interface IntegrationLinksProps {
  testID: string;
  title: string;
  description: string;
  btnType: "add" | "added";
  bgColor: "white" | "blue";
}

export const IntegrationLinks = (props: IntegrationLinksProps) => {
  const { title, description, btnType, bgColor } = props;
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
          <Text variant="smBody" color="bodyText" style={styles.alignDesc}>
            {description}
          </Text>
          {btnType === "add" ? (
            <Button
              testID={"ProjectCreation_nextBtn"}
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
