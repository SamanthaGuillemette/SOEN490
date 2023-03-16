import { Platform, StatusBar, StyleSheet } from "react-native";
export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },

  flashListContainer: {
    paddingBottom: Platform.OS === "ios" ? 110 : 80,
    paddingTop: 5,
  },
  segmentContainer: {
    alignItems: "center",
    marginTop: 40,
  },
});
