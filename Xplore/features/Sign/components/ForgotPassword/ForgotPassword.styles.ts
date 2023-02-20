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
  subTitleText: {
    textAlign: "center",
    paddingHorizontal: "10%",
    marginTop: 10,
  },
  primaryButton: {
    marginTop: "20%",
    marginBottom: 25,
  },
  loginLink: {
    marginBottom: "20%",
  },
  forgotPasswordImage: {
    width: PixelRatio.getPixelSizeForLayoutSize(60),
    height: PixelRatio.getPixelSizeForLayoutSize(60),
  },
  loadingScreen: {
    color: "#FFF",
    textAlign: "center",
  },
});
