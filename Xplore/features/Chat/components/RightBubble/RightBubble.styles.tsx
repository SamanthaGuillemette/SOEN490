import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bubbleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    marginVertical: 15,
  },
  rightBubble: {
    maxWidth: 230,
    borderRadius: 10,
    padding: 10,
  },
  rightBubbleAvatar: {
    marginHorizontal: 12,
  },
});
