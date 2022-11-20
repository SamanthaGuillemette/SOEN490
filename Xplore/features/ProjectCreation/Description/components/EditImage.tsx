import * as React from "react";
import { StyleSheet } from "react-native";
import { ShadowView, View, Icon } from "../../../../components";

const EditImage = () => {
  return (
    <View style={styles.container}>
      <ShadowView style={styles.circle}>
        <Icon name="image" style={styles.icon} />
      </ShadowView>
    </View>
  );
};

export default EditImage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 127,
    height: 127,
    borderRadius: 100,
    marginTop: 23,
  },
  icon: {
    left: 50,
    top: 50,
  },
});
