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

const renderThirdLayer = (percentage: number) => {
  if (percentage > 50) {
    return (
      <View
        style={[
          styles.percentageLayerTwo,
          CircularPercentageBarProps(percentage - 50, 45),
        ]}
      />
    );
  } else {
    return <View style={styles.offsetLayer} />;
  }
};

export const CircularPercentageBar = (props: any) => {
  const { percentage } = props;
  let firstProgressLayerStyle;
  if (percentage > 50) {
    firstProgressLayerStyle = CircularPercentageBarProps(50, -135);
  } else {
    firstProgressLayerStyle = CircularPercentageBarProps(percentage, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.percentageLayerOne, firstProgressLayerStyle]} />
      {renderThirdLayer(percentage)}
      <Text color="titleText" style={styles.percentageText}>
        {percentage}%
      </Text>
    </View>
  );
};
