import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../../../constants";

export default StyleSheet.create({
  chatBox_container: {
    paddingHorizontal: Platform.OS === "ios" ? 15 * multiplier : 15,
    paddingVertical: Platform.OS === "ios" ? 20 * multiplier : 20,
    marginHorizontal: Platform.OS === "ios" ? 10 * multiplier : 10,
    marginTop: Platform.OS === "ios" ? 15 * multiplier : 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  chatBox_avatar: {
    marginRight: Platform.OS === "ios" ? 20 * multiplier : 20,
  },
  chatBox_username: { marginBottom: 3 },
  chatBox_lastText: {
    maxWidth: Platform.OS === "ios" ? 245 * multiplier : 245,
  },
  chatBox_time: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});