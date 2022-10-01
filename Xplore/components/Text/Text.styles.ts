import { StyleSheet } from "react-native";
import { fonts, fontSizes } from "../../constants/fonts";

export default StyleSheet.create({
  h1: {
    fontFamily: fonts.defaultBold,
    fontSize: fontSizes.h1,
  },
  h2: {
    fontFamily: fonts.defaultBold,
    fontSize: fontSizes.h2,
  },
  h3: {
    fontFamily: fonts.defaultBold,
    fontSize: fontSizes.h3,
  },
  h4: {
    fontFamily: fonts.defaultBold,
    fontSize: fontSizes.h4,
  },
  body: {
    fontFamily: fonts.default,
    fontSize: fontSizes.body,
  },
  smBody: {
    fontFamily: fonts.default,
    fontSize: fontSizes.smBody,
  },
  label: {
    fontFamily: fonts.default,
    fontSize: fontSizes.label,
  },
  smLabel: {
    fontFamily: fonts.defaultBold,
    fontSize: fontSizes.smLabel,
  },
  link: {
    fontFamily: fonts.default,
    fontSize: fontSizes.link,
  },
});
