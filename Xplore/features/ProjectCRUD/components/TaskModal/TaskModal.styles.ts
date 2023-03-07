import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
  },
  containerParticipants: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 23,
    marginHorizontal: 6,
  },
  alignDatePicker: {
    flexDirection: "row",
  },
  shadowView: {
    width: 357,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 20,
    borderRadius: 10,
  },
  alignLeft: {
    top: 10,
    left: 20,
  },
  alignRight: {
    top: 10,
    right: -120,
  },
  taskName: {
    width: 337,
    height: 45,
  },
  taskDesc: {
    width: 337,
    height: 111,
  },
  taskCategory: {
    width: 337,
    height: 45,
  },
  styleText: {
    marginTop: 7,
  },
  alignBtn: {
    alignItems: "center",
    marginTop: 23,
  },

  button: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginHorizontal: 150,
    overflow: "hidden",
    marginTop: 20,
  },
  icon: {
    margin: 10,
  },
  alignTouchable: {
    top: 1,
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
