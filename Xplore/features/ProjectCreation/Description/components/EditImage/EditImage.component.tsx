import * as React from "react";
import { ShadowView, View, Icon } from "../../../../../components";
import styles from "./EditImage.styles";

export const EditImage = () => {
  return (
    <View style={styles.container}>
      <ShadowView style={styles.circle}>
        <Icon name="image" size="x-large" style={styles.alignImage} />
      </ShadowView>
    </View>
  );
};
