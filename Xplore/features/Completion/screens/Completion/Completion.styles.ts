import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  checkContainer: {
    paddingTop: Platform.OS === "ios" ? "20%" : "10%",
    alignItems: "center",
  },
  successCheck: {
    width: 300,
    resizeMode: "contain",
  },
  bottomHalfContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  congratTitle: {
    marginBottom: 10,
  },
  congratText: {
    marginBottom: "40%",
  },
});
