import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  avatar_container: {
    borderRadius: 30,
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  avatar: {
    height: Platform.OS === "ios" ? 50 * multiplier : 50,
    width: Platform.OS === "ios" ? 50 * multiplier : 50,
    borderRadius: 30,
    borderWidth: 3,
  },
});
