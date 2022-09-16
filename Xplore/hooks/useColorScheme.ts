/**
 *  This hook allows us to actively listen to the color scheme changes (device setting)
 *  It will either return a string of "light" or "dark"
 */

// import { useEffect, useState } from "react";
// import { Appearance, ColorSchemeName } from "react-native";
import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  // const [colorScheme, setColorScheme] =
  //   useState<NonNullable<ColorSchemeName>>("light");

  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  //     setColorScheme(colorScheme);
  //   });

  //   return () => subscription.remove();
  // }, []);

  // return colorScheme;

  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
