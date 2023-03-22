import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fullView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredView: {
    flex: 1,
    paddingVertical: 80,
  },
  modalView: {
    margin: 20,
    borderRadius: 8,
    padding: 35,
  },
  alertText: {
    marginBottom: 10,
  },
  searchBar: {
    width: 280,
  },
  buttons: {
    alignItems: "center",
  },
  primaryButton: {
    marginTop: 5,
  },
  secondaryButton: {
    marginTop: 10,
  },
});
