import { StyleSheet } from "react-native";

const percentageColor = "#00BA34";
const emptyColor = "#F5F5F5";

const styles = (scalingFactor: number = 1) => {
  return StyleSheet.create({
    container: {
      width: scalingFactor * 70,
      height: scalingFactor * 70,
      borderColor: emptyColor,
      borderWidth: scalingFactor * 5,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 15,
      marginRight: 15,
    },
    percentageLayerOne: {
      width: scalingFactor * 70,
      height: scalingFactor * 70,
      position: "absolute",
      borderRadius: 100,
      borderWidth: scalingFactor * 5,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: percentageColor,
      borderTopColor: percentageColor,
      transform: [{ rotateZ: "-135deg" }],
    },
    percentageLayerTwo: {
      width: scalingFactor * 70,
      height: scalingFactor * 70,
      position: "absolute",
      borderRadius: 100,
      borderWidth: scalingFactor * 5,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: percentageColor,
      borderTopColor: percentageColor,
      transform: [{ rotateZ: "45deg" }],
    },
    offsetLayer: {
      width: scalingFactor * 70,
      height: scalingFactor * 70,
      borderRadius: 100,
      borderWidth: scalingFactor * 5,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: emptyColor,
      borderTopColor: emptyColor,
      transform: [{ rotateZ: "-135deg" }],
    },
    percentageText: {
      position: "absolute",
      fontSize: scalingFactor * 12,
    },
  });
};

export default styles;
