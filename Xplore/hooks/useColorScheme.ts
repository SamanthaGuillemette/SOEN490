/**
 *  This hook allows us to actively listen to the color scheme changes (device setting)
 *  It will either return a string of "light" or "dark"
 *
 *  Usage: const colorScheme = useColorScheme();
 */

import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

export function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
