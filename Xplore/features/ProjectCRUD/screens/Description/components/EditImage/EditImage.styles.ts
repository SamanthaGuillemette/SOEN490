import { StyleSheet } from "react-native";
import { deviceScreenHeight } from "../../../../../../constants";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.05 * deviceScreenHeight,
  },
  circle: {
    width: 127,
    height: 127,
    borderRadius: 100,
  },
  alignImage: {
    left: 34,
    top: 34,
  },
});
