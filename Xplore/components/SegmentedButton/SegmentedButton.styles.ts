import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { multiplier } from "../../constants";

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  tabsContainerStyle: {
    height: Platform.OS === "ios" ? 30 * multiplier : 30,
    minWidth: Platform.OS === "ios" ? 180 * multiplier : 180,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  tabStyle: {
    padding: 3,
  },
  activeTabStyle: {
    borderRadius: 30,
  },
  activeTabTextStyle: {
    color: "white",
  },
});
