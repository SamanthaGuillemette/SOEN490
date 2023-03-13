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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 80,
  },
  modalView: {
    margin: 20,
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
  },
  alertText: {
    marginBottom: 10,
  },
  searchBar: {
    width: 250,
  },
  primaryButton: {
    marginTop: 5,
  },
  secondaryButton: {
    marginTop: 10,
  },
});
