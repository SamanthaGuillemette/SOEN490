import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../../../constants";

export default StyleSheet.create({
  container: {
    marginTop: -220,
    width: deviceScreenWidth,
  },
  headerScroll: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  headerItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  headerActiveBar: {
    height: 2,
    width: "80%",
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
    width: deviceScreenWidth,
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "65%",
  },
});
