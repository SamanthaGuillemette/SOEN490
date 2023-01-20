import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { fontSizes, multiplier } from "../../constants";

export default StyleSheet.create({
  padding: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  textStyle: {
    fontSize:
      Platform.OS === "ios" ? fontSizes.label * multiplier : fontSizes.label,
  },
});
