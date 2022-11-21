import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../../../constants";

export default StyleSheet.create({
  statusBox_container: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 15 * multiplier : 20,
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  statusBox_text: {
    lineHeight: 30,
    fontSize: 15,
  },
});
