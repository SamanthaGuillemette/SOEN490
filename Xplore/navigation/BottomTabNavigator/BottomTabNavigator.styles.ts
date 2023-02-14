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
  },
  tabBarIcon: {
    marginBottom: Platform.OS === "ios" ? -5 : 0,
  },
});
