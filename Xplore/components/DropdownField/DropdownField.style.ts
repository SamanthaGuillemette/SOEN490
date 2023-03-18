import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    paddingHorizontal: 10,
    marginTop: 15,
  },

  shadowView: {
    width: 220,
    height: 285,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingVertical: 20,
  },

  closeText: { textAlign: "center" },

  scrollView: {
    marginTop: 7,
  },

  optionText: { textAlign: "center", marginTop: 5 },
});
