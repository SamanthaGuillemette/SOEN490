import { StatusBar, StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  leaderboardContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 45,
    paddingVertical: Platform.OS === "ios" ? "68%" : "62%",
    borderRadius: 8,
  },
});
