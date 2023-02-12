import { StatusBar, Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  header: {
    position: "absolute",
    top: Platform.OS === "ios" ? "11%" : "8%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationIconContainer: {
    height: 30,
    width: 400,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  notificationIcon: {
    height: 24,
    width: 24,
  },
  modalView: {
    marginTop: Platform.OS === "ios" ? 65 : 80,
    borderRadius: 8,
    alignItems: "center",
    height: "86%",
    marginHorizontal: 6,
  },
  text: {
    width: 300,
    paddingVertical: 10,
    paddingTop: 30,
    marginLeft: 15,
  },
});
