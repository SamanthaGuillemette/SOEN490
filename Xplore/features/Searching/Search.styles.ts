import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  searchBar: {
    flexDirection: "row",
    margin: 20,
  },
  arrowIcon: {
    paddingRight: 10,
    marginTop: 15,
  },
});
