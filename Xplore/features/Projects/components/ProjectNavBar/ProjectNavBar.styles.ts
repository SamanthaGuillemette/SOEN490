import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    marginTop: -220,
    width: width,
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
  mainItem_scrollView: {
    flex: 1,
    paddingBottom: 550,
  },
  mainItem: {
    width: width,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 200,
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
});
