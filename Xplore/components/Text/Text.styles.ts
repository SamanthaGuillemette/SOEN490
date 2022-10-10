import { Platform, StyleSheet } from "react-native";
import { fonts, fontSizes, lineHeights, multiplier } from "../../constants";

/**
 *
 *  Explanation about the "magic" >>> multiplier <<<
 *  using PixelRatio.get() on iOS & Android => we get the device pixel ratio.
 *
 *  On iOS (iPhone 14 Pro), the pixel ration is 3
 *  On Android (Pixel 4), the pixel ratio is 2.75
 *
 *  ==> Everything we see in iOS is 3/2.75 times denser (smaller) than on Android
 *  ==> Fonts in iOS have to be multiplied with: 3 / 2.75 = 1.09  to look the same size as on Android
 *
 */

export default StyleSheet.create({
  h1: {
    fontFamily: fonts.defaultBold,
    fontSize: Platform.OS === "ios" ? fontSizes.h1 * multiplier : fontSizes.h1,
    lineHeight:
      Platform.OS === "ios" ? lineHeights.h1 * multiplier : lineHeights.h1,
  },
  h2: {
    fontFamily: fonts.defaultBold,
    fontSize: Platform.OS === "ios" ? fontSizes.h2 * multiplier : fontSizes.h2,
    lineHeight:
      Platform.OS === "ios" ? lineHeights.h2 * multiplier : lineHeights.h2,
  },
  h3: {
    fontFamily: fonts.defaultBold,
    fontSize: Platform.OS === "ios" ? fontSizes.h3 * multiplier : fontSizes.h3,
    lineHeight:
      Platform.OS === "ios" ? lineHeights.h3 * multiplier : lineHeights.h3,
  },
  h4: {
    fontFamily: fonts.defaultBold,
    fontSize: Platform.OS === "ios" ? fontSizes.h4 * multiplier : fontSizes.h4,
    lineHeight:
      Platform.OS === "ios" ? lineHeights.h4 * multiplier : lineHeights.h4,
  },
  body: {
    fontFamily: fonts.default,
    fontSize:
      Platform.OS === "ios" ? fontSizes.body * multiplier : fontSizes.body,
    lineHeight:
      Platform.OS === "ios" ? lineHeights.body * multiplier : lineHeights.body,
  },
  smBody: {
    fontFamily: fonts.default,
    fontSize:
      Platform.OS === "ios" ? fontSizes.smBody * multiplier : fontSizes.smBody,
    lineHeight:
      Platform.OS === "ios"
        ? lineHeights.smBody * multiplier
        : lineHeights.smBody,
  },
  label: {
    fontFamily: fonts.default,
    fontSize:
      Platform.OS === "ios" ? fontSizes.label * multiplier : fontSizes.label,
    lineHeight:
      Platform.OS === "ios"
        ? lineHeights.label * multiplier
        : lineHeights.label,
  },
  smLabel: {
    fontFamily: fonts.defaultBold,
    fontSize:
      Platform.OS === "ios"
        ? fontSizes.smLabel * multiplier
        : fontSizes.smLabel,
    lineHeight:
      Platform.OS === "ios"
        ? lineHeights.smLabel * multiplier
        : lineHeights.smLabel,
  },
  link: {
    fontFamily: fonts.default,
    fontSize:
      Platform.OS === "ios" ? fontSizes.link * multiplier : fontSizes.link,
    lineHeight:
      Platform.OS === "ios" ? lineHeights.link * multiplier : lineHeights.link,
  },
  onboarding: {
    fontFamily: fonts.defaultBold,
    fontSize:
      Platform.OS === "ios"
        ? fontSizes.onboarding * multiplier
        : fontSizes.onboarding,
    lineHeight:
      Platform.OS === "ios"
        ? lineHeights.onboarding * multiplier
        : lineHeights.onboarding,
  },
});
