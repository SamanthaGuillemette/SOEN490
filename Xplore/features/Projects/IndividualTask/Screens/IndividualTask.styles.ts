import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  taskImage: {
    height: 291.92,
    width: 370,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    //paddingTop: 100,
  },
});
