import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  tabsContainerStyle: {
    height: 30,
    minWidth: 180,
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
    margin: 1,
    padding: 1,
  },
  activeTabStyle: {
    borderRadius: 30,
  },
  activeTabTextStyle: {
    color: "white",
  },
});
