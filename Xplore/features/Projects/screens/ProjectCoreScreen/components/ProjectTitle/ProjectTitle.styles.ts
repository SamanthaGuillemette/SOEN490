import { StyleSheet, PixelRatio } from "react-native";

export default StyleSheet.create({
  projectImage: {
    marginTop: -50,
    marginLeft: -20,
    width: PixelRatio.getPixelSizeForLayoutSize(160),
    height: PixelRatio.getPixelSizeForLayoutSize(80),
  },
  imageText: {
    marginTop: 120,
    marginLeft: -20,
    textAlign: "center",
    textAlignVertical: "bottom",
    color: "white",
  },
});
