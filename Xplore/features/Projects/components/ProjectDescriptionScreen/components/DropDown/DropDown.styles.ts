import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    width: width,
  },
  dropDown: {
    width: 330,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: "hidden",
    paddingVertical: 10,
    marginTop: 5,
  },
  subItem: {
    paddingTop: 4,
  },
  itemContainer: {
    marginVertical: 5,
    width: 30,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  row: {
    paddingLeft: 4,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBar: {
    height: 1,
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});
