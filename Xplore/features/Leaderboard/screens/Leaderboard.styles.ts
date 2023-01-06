import { StatusBar, StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  leaderboardContainer: {
    marginHorizontal: 20,
    marginVertical: 45,
    paddingHorizontal: 40,
    height: Platform.OS === "ios" ? 560 : 460,
    borderRadius: 8,
    flexDirection: "row",
  },
});
