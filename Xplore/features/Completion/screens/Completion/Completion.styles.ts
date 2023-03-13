import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  greenCheck: {
    marginTop: 30,
    width: deviceScreenWidth,
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
