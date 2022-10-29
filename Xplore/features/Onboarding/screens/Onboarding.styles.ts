import { Dimensions, Platform, StyleSheet } from "react-native";
import { multiplier } from "../../../constants";

const screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
  },
  singleSlide: {
    // width: screenWidth - 60, // 60 is the margin from parent (main) container
    width: screenWidth,
    paddingHorizontal: 30,
  },
  mainContainer: {
    flex: 1,
    // padding: 30,
    marginTop: "40%",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 40,
  },
  image: {
    // width: Platform.OS === "ios" ? width - 80 * multiplier : width - 80,
    // height: Platform.OS === "ios" ? 285 * multiplier : 350,
    width: "100%",
    height: "40%",
    borderRadius: 15,
    marginBottom: 43,
  },
  onboardingText: {
    // paddingTop: 43,
    // width: width - 80,
    // textAlign: "center",
    paddingHorizontal: 30,
  },
  dotContainer: {
    width: 21,
    padding: 10,
    top: 60,
  },
});
