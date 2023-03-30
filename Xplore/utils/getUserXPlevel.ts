export const getUserXPlevel = (xp: number) => {
  if (xp >= 250 && xp < 500) {
    return 1;
  } else if (xp >= 500 && xp < 1000) {
    return 2;
  } else if (xp >= 1000 && xp < 2500) {
    return 3;
  } else if (xp >= 2500 && xp < 5000) {
    return 4;
  } else if (xp >= 5000 && xp < 10000) {
    return 5;
  } else if (xp >= 10000 && xp < 25000) {
    return 6;
  } else if (xp >= 25000 && xp < 50000) {
    return 7;
  } else if (xp >= 50000) {
    return 8;
  } else {
    return 0;
  }
};
