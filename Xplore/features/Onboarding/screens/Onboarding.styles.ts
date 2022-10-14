import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 3.1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 40,
  },
  skipContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageContainer: {
    justifyContent: "flex-end",
    width,
    alignItems: "center",
    bottom: 15,
  },
  image: {
    width: width - 80,
    height: 300,
    borderRadius: 40,
  },
  onboardingText: {
    paddingTop: 43,
    width: width - 80,
    color: colors.light.gray200,
    textAlign: "center",
  },
  dotContainer: {
    width: 21,
    padding: 10,
    top: 90,
  },
  skipButton: {
    color: colors.light.gray300,
    padding: 47,
    fontWeight: "bold",
  },
  pagingDot: {
    width: 7,
    height: 7,
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
});
