import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  Rec: {
    marginTop: 20,
  },
  BiggerRectangle: {
    width: 330,
    height: 5,
    backgroundColor: colors.light.background,
    borderRadius: 100,
  },
  Rectangle: {
    width: 286,
    height: 5,
    backgroundColor: colors.light.primary,
    borderRadius: 100,
  },
  Description: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
