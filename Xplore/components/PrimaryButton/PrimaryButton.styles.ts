import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  button: {
    width: Platform.OS === "ios" ? 250 * multiplier : 250,
    paddingVertical: Platform.OS === "ios" ? 16 * multiplier : 16,
    borderRadius: 25,
  },
  textStyle: {
    textAlign: "center",
    color: "white",
  },
});
