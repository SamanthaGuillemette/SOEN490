import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  leaderScreen: {
    flex: 1,
  },
  leaderboardContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 45,
    marginBottom: 90,
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 8,
    overflow: "hidden",
  },
});
