import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../../../constants";

export default StyleSheet.create({
  statusBox_container: {
    paddingHorizontal: 25,
    paddingVertical: Platform.OS === "ios" ? 15 * multiplier : 20,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusBox_text: {
    lineHeight: 30,
    fontSize: 12,
  },
});
