import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    //flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  scrollViewStyle: {
    flex: 1,
    //paddingTop: 45,
  },
});
