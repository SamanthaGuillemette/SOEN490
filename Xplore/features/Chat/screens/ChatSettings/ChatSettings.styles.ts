import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  settingsContainer: {
    alignItems: "center",
    height: "100%",
  },
  contactName: {
    marginTop: 60,
    alignItems: "center",
  },
  avatarGroup: {
    margin: 30,
  },
});
