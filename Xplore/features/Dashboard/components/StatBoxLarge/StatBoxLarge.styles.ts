import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 18 : 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  statIcon: {
    marginBottom: 24,
  },
});
