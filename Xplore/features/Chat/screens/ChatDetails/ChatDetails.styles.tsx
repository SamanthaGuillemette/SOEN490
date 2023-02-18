import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
    marginBottom: 15,
  },
  messages_container: {
    flex: 1,
    marginTop: 10,
  },
});
