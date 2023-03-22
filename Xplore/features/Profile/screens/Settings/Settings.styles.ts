import { StyleSheet } from "react-native";
import { deviceScreenWidth } from "../../../../constants";

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  backButton: {
    paddingTop: 25,
    paddingLeft: 23,
    paddingBottom: 16,
    width: 80,
  },
  avatarContainer: {
    alignItems: "center",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 10,
    right: deviceScreenWidth / 2 - 60,
    zIndex: 1,
  },
  editAvatarButtonShadow: {
    padding: 8,
    borderRadius: 50,
  },
  settingButtonsContainer: {
    marginTop: 75,
    paddingHorizontal: 30,
  },
});
