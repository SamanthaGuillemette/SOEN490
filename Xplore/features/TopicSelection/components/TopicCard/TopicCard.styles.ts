import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../constants";

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    width: deviceScreenWidth - 70,
    height: 115,
    marginVertical: 30,
    marginHorizontal: 35,
    backgroundColor: "white",
  },
  imageBgContainer: {
    borderRadius: 8,
  },
  topicNameContainer: {
    padding: 30,
  },
  whiteText: {
    color: "white",
  },
  projectName: {
    marginBottom: 30,
    textAlign: "center",
    top: 15
  },
});
