import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../constants";

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    width: deviceScreenWidth - 70,
    height: 115,
    marginBottom: 25,
    marginHorizontal: 35,
  },
  imageBgContainer: {
    borderRadius: 8,
  },
  topicNameContainer: {
    padding: 30,
  },
  overlay: {
    borderRadius: 8,
    width: deviceScreenWidth - 70,
    height: 115,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  selectedOverlay: {
    borderRadius: 8,
    width: deviceScreenWidth - 70,
    height: 115,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  projectName: {
    marginBottom: 30,
    textAlign: "center",
    top: 15,
  },
  checkCircleImg: {
    width: 24,
    height: 24,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 45,
    left: 149,
    zIndex: 1,
  },
});
