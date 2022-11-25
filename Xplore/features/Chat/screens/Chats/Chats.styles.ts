import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  chat_container: {
    flex: 1,
    paddingTop: 30,
  },
});
