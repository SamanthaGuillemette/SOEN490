import { Platform, StyleSheet } from "react-native";
import { Icon, ShadowView, Text } from "../../../../components";

const StatBoxLarge = () => {
  return (
    <ShadowView style={styles.container}>
      <Icon name="refresh-ccw" color="primary" style={styles.statIcon} />
      <Text variant="h3">In Progress</Text>
      <Text variant="body">3 Projects</Text>
    </ShadowView>
  );
};

export default StatBoxLarge;

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 18 : 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  statIcon: {
    marginBottom: 24,
  },
});
