import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { fontSizes, multiplier } from "../../constants";

export default StyleSheet.create({
  container: {
    marginVertical: 20,
    borderRadius: 30,
  },
  tabsContainerStyle: {
    height: Platform.OS === "ios" ? 38 * multiplier : 38,
    minWidth: Platform.OS === "ios" ? 200 * multiplier : 200,
    borderRadius: 30,
  },
  tabStyle: {
    margin: 1,
  },
  lastTabStyle: {
    marginHorizontal: 20,
  },
  activeTabStyle: {
    borderRadius: 30,
  },
  activeTabTextStyle: {
    color: "white",
    fontSize:
      Platform.OS === "ios" ? fontSizes.label * multiplier : fontSizes.label,
  },
});
