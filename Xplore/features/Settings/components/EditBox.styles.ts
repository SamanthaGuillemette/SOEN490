import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export default StyleSheet.create({
  Box: {
    borderRadius: 8,
    marginTop: 13,
    backgroundColor: colors.light.backgroundSecondary,
    paddingTop: 20,
    paddingLeft: 25,
    left: 43,
  },
  InputField: {
    height: 20,
    width: 115,
  },
  UpdateBtn: {
    height: 31,
    width: 85,
    borderRadius: 25,
    position: "absolute",
    top: 60,
    left: 25,
  },
  SaveBtn: {
    height: 31,
    width: 85,
    borderRadius: 25,
  },
  SaveBtnView: {
    marginTop: 13,
    alignItems: "center",
  },
});
