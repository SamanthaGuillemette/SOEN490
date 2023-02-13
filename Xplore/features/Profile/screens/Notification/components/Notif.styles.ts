import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    paddingVertical: 20,
  },
  icon: {
    marginRight: 15,
    marginLeft: 15,
  },
  avatar: {
    marginRight: 5,
    marginLeft: 5,
  },
  chipButton: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    right: 5,
  },
  bodyText: {
    width: 220,
    marginRight: 10,
  },
});
