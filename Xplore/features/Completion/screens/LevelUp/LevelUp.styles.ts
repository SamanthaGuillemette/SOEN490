import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  badgeAnimation: {
    marginTop: 10,
    width: deviceScreenWidth,
  },
  badgeImage: {
    width: 120,
    height: 120,
    marginBottom: "15%",
  },
  levelUpTitle: {
    marginTop: 30,
    textAlign: "center",
  },
  levelTitle: {
    marginBottom: 10,
  },
  levelDetails: {
    marginBottom: "40%",
    marginHorizontal: 50,
    textAlign: "center",
  },
  bottomHalfContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    left: 0,
    right: 0,
  },
});
