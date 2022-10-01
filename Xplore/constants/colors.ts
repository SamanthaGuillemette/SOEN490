const primary = "#463FB0";
const purples = {
  purple900: "#4A5784",
  purple500: "#6F69C9",
};
const grays = {
  white: "#fff",
  gray100: "#F2F2F2",
  gray800: "#5D5D5D",
  gray900: "#333333",
  gray950: "#1e1e1e",
  gray975: "#121212",
  black: "#000",
};

export const colors = {
  light: {
    primary,
    text: grays.gray900,
    background: grays.gray100,
    tint: primary,
    tabIconDefault: "#ccc",
    ...grays,
    completedBackground: primary,
    completedPrimary: grays.white,
    navBarBackground: grays.white,
  },
  dark: {
    primary,
    text: grays.white,
    background: grays.gray900,
    tint: primary,
    tabIconDefault: "#ccc",
    ...purples,
    ...grays,
    white: grays.gray950,
    completedBackground: grays.gray900,
    completedPrimary: purples.purple500,
    navBarBackground: grays.gray975,
  },
};
