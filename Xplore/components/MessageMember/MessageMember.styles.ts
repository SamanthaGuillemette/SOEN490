import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  user_container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  usr: {
    marginRight: 100,
  },
  msg_button: {
    position: "absolute",
    top: Platform.OS === "ios" ? 35 * multiplier : 45,
    right: 20,
  },
});
