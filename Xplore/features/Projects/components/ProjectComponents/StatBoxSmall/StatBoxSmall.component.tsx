import { Platform, StyleSheet } from "react-native";
import { Icon, ShadowView, Text, View } from "../../../../../components";

const StatBoxSmall = () => {
  return (
    <ShadowView style={styles.container}>
      <View style={styles.title}>
        <Text variant="h3">Completed</Text>
        <Icon name="check-circle" color="primary" style={styles.titleIcon} />
      </View>
      <Text variant="body">20 Tasks</Text>
    </ShadowView>
  );
};

export default StatBoxSmall;

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 18 : 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleIcon: {
    marginLeft: 20,
  },
});
