import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  searchBar: {
    marginHorizontal: 35,
    width: 320,
  },
});
