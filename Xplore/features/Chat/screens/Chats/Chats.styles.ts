import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  chat_scrollView: {
    flex: 1,
    paddingVertical: 45,
  },
  chat_container: {
    flex: 1,
    height: "100%",
    paddingBottom: 125,
  },
});
