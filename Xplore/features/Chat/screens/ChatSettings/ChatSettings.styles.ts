import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  contactName: {
    alignItems: "center",
    marginTop: 40,
  },
});
