import { PixelRatio, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: "25%",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  textItems: {
    marginVertical: "20%",
    alignItems: "center",
  },
  PrimaryButton: {
    marginTop: "20%",
    marginBottom: "20%",
  },
  loginLink: {
    marginBottom: "20%",
    color: "#6587FF",
  },
  forgotPasswordImage: {
    width: PixelRatio.getPixelSizeForLayoutSize(60),
    height: PixelRatio.getPixelSizeForLayoutSize(60),
  },
});
