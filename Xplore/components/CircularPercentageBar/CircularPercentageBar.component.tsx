import React from "react";
import { View } from "react-native";
import { Text } from "../Text";
import styles from "./CircularPercentageBar.styles";

const CircularPercentageBarProps = (
  percentage: number,
  base_degrees: number
) => {
  const rotation = base_degrees + percentage * 3.6;
  return {
    transform: [{ rotateZ: `${rotation}deg` }],
  };
};

export const CircularPercentageBar = (props: any) => {
  const { percentage, scale } = props;
  let firstProgressLayerStyle;
  if (percentage > 50) {
    firstProgressLayerStyle = CircularPercentageBarProps(50, -135);
  } else {
    firstProgressLayerStyle = CircularPercentageBarProps(percentage, -135);
  }

  const renderThirdLayer = () => {
    if (percentage > 50) {
      return (
        <View
          style={[
            styles(scale).percentageLayerTwo,
            CircularPercentageBarProps(percentage - 50, 45),
          ]}
        />
      );
    } else {
      return <View style={styles(scale).offsetLayer} />;
    }
  };

  return (
    <View style={styles(scale).container}>
      <View
        style={[styles(scale).percentageLayerOne, firstProgressLayerStyle]}
      />
      {renderThirdLayer()}
      <Text color="titleText" style={styles(scale).percentageText}>
        {percentage}%
      </Text>
    </View>
  );
};
