import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../../../../../constants";

export default StyleSheet.create({
  user_container: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 15 * multiplier : 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  user_avatar: {
    marginRight: Platform.OS === "ios" ? 20 * multiplier : 20,
  },
  username: {
    marginBottom: 3,
    fontSize: 15,
    fontWeight: "bold",
  },
  user_xp: {
    maxWidth: Platform.OS === "ios" ? 250 * multiplier : 250,
    paddingRight: 100,
  },
});
