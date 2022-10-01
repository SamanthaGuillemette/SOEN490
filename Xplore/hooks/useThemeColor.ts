/**
 *  This hook is used to pull the correct color from the theme's colors (located in constants/colors.ts)
 *  You can also (optionally) provide custom colors for light/dark version of the theme
 *
 *  Usage:        const primaryColor = useThemeColor('primary');
 *  Custom color: const backgroundColor = useThemeColor('background', { dark: '#6b4630', light: '#62fc9b' });
 *
 */

import colors from "../constants/colors";
import { useColorScheme } from "./useColorScheme";

export function useThemeColor(
  themeColor: keyof typeof colors.light & keyof typeof colors.dark,
  customColor?: { light: string; dark: string }
) {
  // Get the current device's theme: light | dark
  const theme = useColorScheme();

  // If custom color is provided, use it
  if (customColor) {
    return customColor[theme];
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

// function useThemeColor(
//   themeColor: keyof typeof colors.light & keyof typeof colors.dark,
//   customColor?: { light: string; dark: string }
// ) {
//  // Manually change this value (light | dark) to simulate device's theme changing
//   const theme = "light";

//   console.log("=====> current theme: ", theme);
//   console.log("=====> themeColor: ", themeColor);

//   if (customColor) {
//     return customColor[theme];
//   } else {
//     return colors[theme][themeColor];
//   }
// }

// const result = useThemeColor("background", { dark: '#6b4630', light: '#62fc9b' });
// console.log("=====> RESULT: ", result);
