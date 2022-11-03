import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  Avatar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Image: {
    borderRadius: 200,
    borderWidth: 2,
    borderColor: colors.light.backgroundSecondary,
  },
});
