import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: "10%",
  },
  mainContainer: {
    flex: 1,
    marginTop: "50%",
  },
  singleSlide: {
    width: screenWidth - 60,
    marginHorizontal: 30,
  },
  image: {
    width: "100%",
    height: "40%",
    borderRadius: 15,
    marginBottom: 43,
  },
  onboardingText: {
    paddingHorizontal: 30,
    textAlign: "center",
  },
  dotContainer: {
    marginLeft: 5,
    flexDirection: "row",
    position: "relative",
    bottom: 0,
  },
  activeDot: {
    position: "absolute",
    bottom: 0,
    width: 18,
  },
  getStartedButton: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    marginBottom: 20,
  },
});
