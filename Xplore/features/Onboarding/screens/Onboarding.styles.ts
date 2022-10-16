import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 3.5,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 40,
  },
  skipContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    top: 97,
    zIndex: 10,
  },
  imageContainer: {
    justifyContent: "flex-end",
    width,
    alignItems: "center",
    bottom: 25,
  },
  image: {
    width: width - 80,
    height: 300,
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
    top: 85,
  },
});
