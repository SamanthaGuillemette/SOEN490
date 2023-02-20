import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  tabBar: {
    height: Platform.OS === "ios" ? 100 : 70,
    paddingHorizontal: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute", // Absolute to make it "float above" the SafeAreaView
    bottom: 0,
    left: 0,
    right: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  tabBarIcon: {
    marginBottom: Platform.OS === "ios" ? -5 : 0,
  },
});
