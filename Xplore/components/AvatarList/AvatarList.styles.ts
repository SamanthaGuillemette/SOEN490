import { Platform, StyleSheet } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  avatarListContainer: {
    flexDirection: "row",
    width: Platform.OS === "ios" ? 140 * multiplier : 140,
    height: Platform.OS === "ios" ? 40 * multiplier : 40,
  },
  avatar: {
    height: 45,
    width: 45,
  },
  plusCircle: {
    paddingTop: 6,
    paddingLeft: 7,
    borderWidth: 2,
    borderRadius: 100,
    width: 40,
    height: 40,
    translateX: -45,
    zIndex: 4,
  },
});
