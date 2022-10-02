/**
 *  This hook is used to pull the correct color from the theme's colors (located in constants/colors.ts)
 *  You can also (optionally) provide custom colors for light/dark version of the theme
 *
 *  Usage:        const primaryColor = useThemeColor('primary');
 *  Custom color: const backgroundColor = useThemeColor('background', { dark: '#6b4630', light: '#62fc9b' });
 *
 */

import { colors } from "../constants";
import { useColorScheme } from "./useColorScheme";

type themeColorType = keyof typeof colors.light & keyof typeof colors.dark;
type customColorsType = { light?: string; dark?: string };

export function useThemeColor(
  themeColor: themeColorType,
  customColors: customColorsType = {} // Give default param as an empty object
) {
  // Get the current device's theme: light | dark
  const theme = useColorScheme();

  // Select a SINGLE color from provided colors based on theme dark/light
  const selectedCustomColor = customColors[theme];

  // If the selected custom color is valid, use it
  if (selectedCustomColor) {
    return selectedCustomColor;
  } else {
    return colors[theme][themeColor];
  }
}

// =============================================================
// Want to understand the code better?
// Go to: https://www.typescriptlang.org/play
// And paste the code below, play with it yourself!
// =============================================================
//
// // Think of this as our theme's colors
// const colors = {
//   light: {
//     text: "black",
//     background: "light",
//   },
//   dark: {
//     text: "white",
//     background: "dark",
//   },
// };
//
// type themeColorType = keyof typeof colors.light & keyof typeof colors.dark;
// type customColorsType = { light?: string; dark?: string };
//
// function useThemeColor(
//   themeColor: themeColorType,
//   customColors: customColorsType = {} // Give default param as an empty object
// ) {
//   // Manually change this value (light | dark) to simulate device's theme changing
//   const theme = "light";
//
//   // Select a SINGLE color from provided colors based on theme dark/light
//   const selectedCustomColor = customColors[theme];
//
//   console.log("1 =====> selectedCustomColor: ", selectedCustomColor);
//
//   // If the selected custom color is valid, use it
//   if (selectedCustomColor) {
//     return selectedCustomColor;
//   } else {
//     return colors[theme][themeColor];
//   }
// }
//
// const result1 = useThemeColor("text", {light: "customLightColor", dark: "customDarkColor"});
// console.log("2 =====> RESULT with custom colors: ", result1);
//
// const result2 = useThemeColor("text");
// console.log("3 =====> RESULT with no custom colors: ", result2);
