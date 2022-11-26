import { StyleSheet } from "react-native";
import { colors } from "../../../../constants";

export default StyleSheet.create({
  backgroundBox: {
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: colors.light.generalGray,
    height: 110,
    width: 320,
  },
  innerBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: colors.light.generalGray,
    height: 110,
    width: 287,
    paddingLeft: 32,
    paddingTop: 13,
    paddingBottom: 13,
  },
  icons: {
    marginLeft: 290,
    marginBottom: 60,
  },
});
