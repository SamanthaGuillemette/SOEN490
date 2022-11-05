import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bubbleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
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
  msgTime: {
    alignSelf: "flex-end",
  },
});
