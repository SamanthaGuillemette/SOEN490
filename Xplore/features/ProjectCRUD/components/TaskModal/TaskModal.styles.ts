import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerTaskName: {
    width: 337,
    height: 45,
    marginTop: 23,
  },

  containerTaskDesc: {
    width: 337,
    height: 111,
    marginTop: 5,
  },

  containerTaskCat: {
    width: 337,
    height: 45,
    marginTop: 5,
  },

  alignDatePicker: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  shadowView: {
    width: 357,
    paddingBottom: 20,
    borderRadius: 10,
  },
  inputFields: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  alignRight: {
    top: 10,
    right: -120,
  },
  taskName: {},
  taskDesc: {},
  taskCategory: {},
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

  textViewAbout: {
    paddingHorizontal: 20,
    marginTop: 23,
  },

  textViewParticipant: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
