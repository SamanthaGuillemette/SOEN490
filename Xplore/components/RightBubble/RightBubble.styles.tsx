import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  bubbleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginVertical: 15,
  },
  rightBubble: {
    maxWidth: Platform.OS === "ios" ? 240 * multiplier : 240,
    borderRadius: 10,
    padding: Platform.OS === "ios" ? 12 * multiplier : 12,
  },
  rightBubbleAvatar: {
    marginHorizontal: 12,
  },
  msgTime: {
    alignSelf: "flex-end",
  },
});
