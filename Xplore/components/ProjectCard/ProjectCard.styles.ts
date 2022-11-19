import { Platform, StyleSheet } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  cardContainer: {
    width: Platform.OS === "ios" ? 350 * multiplier : 350,
    height: Platform.OS === "ios" ? 186 * multiplier : 186,
    borderRadius: 8,
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  projectInformationContainer: {
    width: "60%",
  },
  taskContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  conversationsContainer: {
    marginTop: 5,
    flexDirection: "row",
  },
  projectCompletionContainer: {
    width: "40%",
  },
  icon: {
    marginRight: 5,
  },
});
