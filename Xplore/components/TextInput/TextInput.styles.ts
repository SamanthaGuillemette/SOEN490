import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputsContainer: {
    marginTop: 50,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 35,
    width: Platform.OS === "ios" ? 250 * multiplier : 250,
  },
  textInputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textInput: {
    width: 200,
  },
});
