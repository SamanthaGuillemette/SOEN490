import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    paddingVertical: 20,
  },
  icon: {
    marginRight: 10,
    marginLeft: 20,
  },
  avatar: {
    marginRight: 15,
    marginLeft: 5,
  },
  chipButton: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    right: 10,
  },
});
