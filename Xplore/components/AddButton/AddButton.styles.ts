import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  buttonNormal: {
    borderRadius: 8,
    height: 35,
    width: 70,
    backgroundColor: colors.light.primary,
  },
  buttonPressed: {
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
    width: 76,
    borderColor: colors.light.success,
  },
  textStyle: {
    textAlign: "center",
    color: "white",
  },
});
