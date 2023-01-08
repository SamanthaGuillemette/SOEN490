import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../../../../constants";

export default StyleSheet.create({
  chatBox_container: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 15 * multiplier : 15,
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  chatBox_avatar: {
    marginRight: Platform.OS === "ios" ? 20 * multiplier : 20,
  },
  chatBox_username: { marginBottom: 3 },
  chatBox_lastText: {
    maxWidth: Platform.OS === "ios" ? 250 * multiplier : 250,
    paddingRight: 3,
  },
  chatBox_time: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});
