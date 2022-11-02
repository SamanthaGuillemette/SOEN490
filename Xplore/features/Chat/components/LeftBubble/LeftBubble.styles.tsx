import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bubbleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginVertical: 15,
  },
  leftBubble: {
    maxWidth: 230,
    borderRadius: 10,
    padding: 10,
  },
  leftBubbleAvatar: {
    marginHorizontal: 12,
  },
});
