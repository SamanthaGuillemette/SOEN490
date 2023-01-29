import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../../../../constants";

export default StyleSheet.create({
  bubbleContainerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    marginVertical: 15,
  },
  bubbleContainerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginVertical: 15,
  },
  leftBubble: {
    maxWidth: 230,
    borderRadius: 10,
    padding: 12,
  },
  leftBubbleAvatar: {
    marginHorizontal: 12,
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
