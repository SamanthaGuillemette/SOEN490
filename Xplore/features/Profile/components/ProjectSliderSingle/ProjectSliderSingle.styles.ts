import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    borderRadius: 8,
  },
  sideProject: {
    height: "100%",
    width: "100%",
    borderRadius: 7,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
  },
  textContent: {
    position: "absolute",
    left: 25,
    bottom: 35,
    alignSelf: "flex-start",
  },
  completedLabel: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 3,
    letterSpacing: 0.1,
    marginBottom: 8,
    textAlign: "center",
  },
});
