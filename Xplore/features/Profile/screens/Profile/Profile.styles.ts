import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  header: {
    position: "absolute",
    top: Platform.OS === "ios" ? "8%" : "3%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  topHeaderButtons: {
    height: 30,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    paddingHorizontal: 30,
  },
  userInfo: {
    alignItems: "center",
  },
  userInfoIcon: {
    marginRight: 6,
  },
  userInfoDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  userName: {
    marginTop: 6,
  },
  belowHeaderContainer: {
    width: "100%",
    paddingBottom: 120,
    paddingTop: Platform.OS === "ios" ? 30 : 60,
  },
  signoutButton: {
    alignItems: "center",
    marginTop: 50,
  },
});
