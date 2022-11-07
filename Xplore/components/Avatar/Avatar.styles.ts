import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  avatarContainer: {
    borderRadius: 100,
    elevation: Platform.OS === "ios" ? 5 : 10,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    padding: 5,
    margin: -5,
  },
  avatar: {
    borderWidth: 4,
  },
  textAvatar: {
    justifyContent: "center",
    alignItems: "center",
  },
  textAvatarText: {
    color: "white",
  },
});
