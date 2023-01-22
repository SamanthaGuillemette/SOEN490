import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  alignBtn: {
    alignItems: "center",
    marginTop: 23,
  },
  btn: {
    width: 300,
    height: 50,
    borderRadius: 50,
  },
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  stepIndicator: {
    marginTop: 52,
    marginBottom: -25,
  },
  containerStyle: {
    backgroundColor: "transparent",
  },
});
