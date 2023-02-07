import { Platform, StyleSheet } from "react-native";
import { multiplier } from "../../../../constants";

export default StyleSheet.create({
  cardContainer: {
    width: Platform.OS === "ios" ? 350 * multiplier : 350,
    height: Platform.OS === "ios" ? 186 * multiplier : 186,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 40,
    marginLeft: 20,
  },
  projectInformationContainer: {
    width: "50%",
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
    width: "50%",
  },
  percentageCircle: {
    transform: [{ scaleX: 10 }, { scaleY: 10 }],
  },
  icon: {
    marginRight: 5,
  },
  projectMembersContainer: {
    height: "5%",
  },
});
