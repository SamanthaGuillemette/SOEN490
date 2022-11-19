import { StyleSheet } from "react-native";
//import { multiplier } from "../../constants";

export default StyleSheet.create({
  avatarListContainer: {
    flexDirection: "row",
    width: 140,
    height: 50,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  plusCircle: {
    paddingTop: 5,
    paddingLeft: 6,
    borderWidth: 3,
    borderRadius: 100,
    width: 42,
    height: 42,
    translateX: -32,
    zIndex: 4,
  },
});
