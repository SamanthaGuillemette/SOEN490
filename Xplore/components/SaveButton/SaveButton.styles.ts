import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  saveButton: {
    width: Platform.OS === "ios" ? 300 * multiplier : 300,
    paddingVertical: Platform.OS === "ios" ? 16 * multiplier : 16,
    borderRadius: 25,
  },
  textStyle: {
    textAlign: "center",
    color: "white",
  },
});
