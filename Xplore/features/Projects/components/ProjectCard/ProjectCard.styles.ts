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
    width: "60%",
  },
  taskContainer: {
    marginTop: 2,
    flexDirection: "row",
  },
  conversationsContainer: {
    marginTop: 1,
    flexDirection: "row",
  },
  projectCompletionContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  percentageCircle: {
    marginLeft: 100,
  },
  icon: {
    marginRight: 5,
  },
  projectMembersContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});
