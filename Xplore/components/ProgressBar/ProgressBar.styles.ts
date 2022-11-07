import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  BiggerRectangle: {
    height: 5,
    borderRadius: 100,
  },
  Rectangle: {
    height: 3,
    backgroundColor: colors.light.backgroundSecondary,
    borderRadius: 100,
  },
});
