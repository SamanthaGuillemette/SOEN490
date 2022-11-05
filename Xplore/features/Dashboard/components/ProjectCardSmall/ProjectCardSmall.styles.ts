import { Platform, StyleSheet } from "react-native";
import { multiplier } from "../../../../constants";

export default StyleSheet.create({
  container: {
    width: Platform.OS === "ios" ? 132 * multiplier : 132,
    height: Platform.OS === "ios" ? 110 * multiplier : 110,
    borderRadius: 8,
    padding: 4,
    marginRight: 12,
  },
  projectImageContainer: {
    width: "100%",
    height: "70%",
    marginBottom: 10,
  },
  projectImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  projectTitle: {
    paddingHorizontal: 5,
  },
});
