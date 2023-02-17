import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 21,
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBoxInput: {
    marginLeft: 11,
    flex: 0.9, // to increase the "senstive" area of the input
  },
});
