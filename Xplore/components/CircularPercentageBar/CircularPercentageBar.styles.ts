import { StyleSheet } from "react-native";

const percentageColor = "#00BA34";
const emptyColor = "#F5F5F5";

const styles = (circleSize: number = 70, borderSize: number = 5) =>
  StyleSheet.create({
    container: {
      width: circleSize,
      height: circleSize,
      borderColor: emptyColor,
      borderWidth: borderSize,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 15,
      marginRight: 15,
    },
    percentageLayerOne: {
      width: circleSize,
      height: circleSize,
      position: "absolute",
      borderRadius: 100,
      borderWidth: borderSize,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: percentageColor,
      borderTopColor: percentageColor,
      transform: [{ rotateZ: "-135deg" }],
    },
    percentageLayerTwo: {
      width: circleSize,
      height: circleSize,
      position: "absolute",
      borderRadius: 100,
      borderWidth: borderSize,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: percentageColor,
      borderTopColor: percentageColor,
      transform: [{ rotateZ: "45deg" }],
    },
    offsetLayer: {
      width: circleSize,
      height: circleSize,
      borderRadius: 100,
      borderWidth: borderSize,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: emptyColor,
      borderTopColor: emptyColor,
      transform: [{ rotateZ: "-135deg" }],
    },
    percentageText: {
      position: "absolute",
      fontSize: 12,
    },
  });

export default styles;
