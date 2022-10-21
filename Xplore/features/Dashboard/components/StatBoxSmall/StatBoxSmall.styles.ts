import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
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
});
