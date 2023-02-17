import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  projectImage: {
    width: 125,
    height: 137,
    borderRadius: 8,
    marginVertical: 4,
    marginLeft: 4,
  },
  projectInfo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  projectDescription: {
    marginBottom: 35,
  },
  statIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  icon: {
    marginRight: 3,
  },
  statContainer: {
    flexDirection: "row",
    marginBottom: 11,
  },
});
