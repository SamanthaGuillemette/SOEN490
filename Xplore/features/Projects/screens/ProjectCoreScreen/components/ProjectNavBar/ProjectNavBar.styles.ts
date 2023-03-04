import { StyleSheet } from "react-native";
import {
  deviceScreenWidth,
  deviceScreenHeight,
} from "../../../../../../constants";

export default StyleSheet.create({
  container: {
    marginTop: -235,
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
    padding: 20,
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
    height: "65%",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    alignItems: "center",
  },
  discussion: {
    flex: 1,
    width: deviceScreenWidth,
    height: deviceScreenHeight - 110,
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    alignItems: "center",
  },
});
