import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../constants";

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    width: deviceScreenWidth - 40,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  imageBgContainer: {
    borderRadius: 8,
  },
  thirdContainer: {
    padding: 30,
  },
  overlay: {
    borderRadius: 8,
    width: deviceScreenWidth - 40,
    height: 208,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  whiteText: {
    color: "white",
  },
  textIconLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  textContent: {
    marginLeft: 8,
  },
  projectName: {
    marginBottom: 27,
  },
});
