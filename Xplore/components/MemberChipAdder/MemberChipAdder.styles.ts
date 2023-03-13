import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  containerParticipants: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 23,
    marginHorizontal: 6,
  },
  buttonAdder: {
    width: 45,
    height: 45,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
  },
  iconAdder: {
    margin: 10,
  },
});
