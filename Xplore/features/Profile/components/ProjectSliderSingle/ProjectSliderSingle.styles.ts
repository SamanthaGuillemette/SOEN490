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
  },
  completedLabel: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 3,
    letterSpacing: 0.2,
    width: 70,
    marginBottom: 8,
  },
});
