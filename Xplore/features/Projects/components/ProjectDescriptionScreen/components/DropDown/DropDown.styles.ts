import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dropDown: {
    width: 330,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    paddingVertical: 10,
    marginTop: 12,
  },
  subItem: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  row: {
    paddingLeft: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowOpen: {
    paddingLeft: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
});
