import { Dimensions, Platform, StyleSheet } from "react-native";
import { multiplier } from "../../../constants";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 3
  },
  topContainer: {
    flex: Platform.OS === "ios" ? 3.8 * multiplier : 3.2
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 40,
  },
  skipContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    top: 100,
    zIndex: 10,
  },
  imageContainer: {
    justifyContent: "flex-end",
    width,
    alignItems: "center",
    bottom: 45,
  },
  image: {
    width: Platform.OS === "ios" ? width - 80 * multiplier : width - 80,
    height: Platform.OS === "ios" ? 285 * multiplier : 350,
    borderRadius: 40,
  },
  onboardingText: {
    paddingTop: 43,
    width: width - 80,
    textAlign: "center",
  },
  dotContainer: {
    width: 21,
    padding: 10,
    top: 60,
  },
});
