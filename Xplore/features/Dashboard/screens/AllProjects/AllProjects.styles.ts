import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    marginHorizontal: 20,
  },
  mainTitleText: {
    marginBottom: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  flashListContainer: {
    paddingBottom: Platform.OS === "ios" ? 110 : 80,
    paddingTop: 5,
  },
});
