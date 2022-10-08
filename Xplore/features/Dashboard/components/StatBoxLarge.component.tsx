import { Platform, StyleSheet, View } from "react-native";
import { Icon, Text } from "../../../components";

const StatBoxLarge = () => {
  return (
    <View style={styles.container}>
      <Icon name="refresh-ccw" color="primary" />
      <Text variant="h3">In Progress</Text>
      <Text variant="body">3 Projects</Text>
    </View>
  );
};

export default StatBoxLarge;

const styles = StyleSheet.create({
  container: {
    // padding: Platform.OS === "ios" ? "12%" : 15,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 20,
  },
});
