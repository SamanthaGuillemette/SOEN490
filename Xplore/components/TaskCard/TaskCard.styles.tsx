import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundBox: {
    marginTop: 20,
    height: 105,
    width: 320,
  },
  innerBox: {
    justifyContent: "space-between",
    borderRadius: 8,
    marginTop: 18,
    height: 110,
    width: 300,
    paddingTop: 13,
    paddingBottom: 13,
  },
  listContainer: {
    height: 110,
    paddingBottom: 12,
    backgroundColor: "transparent",
  },
  /** task style */
  taskContentContainer: {
    flexDirection: "row",
  },
  taskType: {
    marginLeft: 32,
  },
  taskInfoIcon: {
    marginLeft: 180,
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
  /** right content style */
  righContentStyle: {
    height: 105,
    width: 100,
    borderRadius: 8,
  },
  icons: {
    marginLeft: 70,
  },
  infoIcon: {
    marginTop: 15,
  },
  deleteIcon: {
    marginTop: 16,
  },
});
