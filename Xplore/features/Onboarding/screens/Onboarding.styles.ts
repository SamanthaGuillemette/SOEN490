import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
  },
  mainContainer: {
    flex: 1,
    marginTop: "40%",
  },
  singleSlide: {
    width: screenWidth,
    paddingHorizontal: 30,
  },
  image: {
    width: "100%",
    height: "40%",
    borderRadius: 15,
    marginBottom: 43,
  },
  onboardingText: {
    paddingHorizontal: 30,
  },
  dotContainer: {
    flexDirection: "row",
    position: "relative",
    bottom: 20,
    alignSelf: "center",
  },
});
