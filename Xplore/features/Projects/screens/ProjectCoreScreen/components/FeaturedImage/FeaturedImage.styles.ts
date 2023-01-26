import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../../../constants";

export default StyleSheet.create({
  container: {
    marginTop: -20,
    marginBottom: 272,
  },
  thirdContainer: {
    padding: 30,
  },
  overlay: {
    width: deviceScreenWidth,
    height: 272,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  whiteText: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  projectName: {
    mtextAlign: "center",
    fontSize: 18,
    marginTop: 100,
  },
  imageBgContainer: {
    width: deviceScreenWidth,
    height: 270,
  },
});
