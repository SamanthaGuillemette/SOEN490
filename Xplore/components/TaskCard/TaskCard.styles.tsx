import { StyleSheet } from "react-native";

export default StyleSheet.create({
  innerBox: {
    justifyContent: "space-between",
    borderRadius: 8,
    marginTop: 18,
    height: 110,
    width: 300,
    paddingTop: 13,
    paddingBottom: 13,
  },

  /** task style */
  taskCardContainer: {
    flexDirection: "row",
  },
  taskCategory: {
    marginLeft: 32,
  },
  taskInfoIcon: {
    position: "absolute",
    right: 10,
  },
  taskName: {
    marginLeft: 32,
  },
  dateContainer: {
    flexDirection: "row",
    marginLeft: 34.5,
  },
  calenderIcon: {
    marginRight: 14.5,
  },
  date: {
    marginTop: 2,
  },
});
