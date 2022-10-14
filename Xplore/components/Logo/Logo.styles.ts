import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  logo: {
    height: Platform.OS === "ios" ? 120 * multiplier : 120,
    width: Platform.OS === "ios" ? 120 * multiplier : 120,
  },
});
