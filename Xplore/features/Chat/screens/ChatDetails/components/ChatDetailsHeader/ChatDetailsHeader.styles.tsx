import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 30,
    marginBottom: -20,
    zIndex: 1,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
  },
  navLeftItems: {
    flexDirection: "row",
  },
  navRightItems: {
    flexDirection: "row",
  },
  arrowIcon: {
    paddingRight: 10,
    marginTop: 4,
  },
  phoneIcon: {
    marginRight: 10,
  },
  screenName: {
    paddingLeft: 20,
  },
});
