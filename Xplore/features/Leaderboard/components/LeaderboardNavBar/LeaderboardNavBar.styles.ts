import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  headerItem: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    height: 50,
    justifyContent: "space-evenly",
  },
  headerActiveBar: {
    height: 2,
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  headerBar: {
    height: 0.2,
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  mainItem: {
    width: width - 45,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 70,
    paddingTop: 10,
  },
});
