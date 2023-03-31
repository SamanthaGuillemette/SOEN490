import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollView: {
    marginTop: 10,
    minHeight: 300,
  },
  fixedHeight: {
    justifyContent: "center",
    maxHeight: 400,
    minHeight: 400,
  },
  searchBar: {
    width: 280,
  },
  fullView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    paddingVertical: 50,
  },
});
