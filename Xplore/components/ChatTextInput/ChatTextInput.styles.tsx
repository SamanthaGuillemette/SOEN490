import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: Platform.OS === "ios" ? 15 * multiplier : 15,
    padding: Platform.OS === "ios" ? 15 * multiplier : 15,
    borderRadius: 10,
  },
  rightInputItems: {
    flexDirection: "row",
  },
  textInput: {
    paddingLeft: 15,
  },
});
