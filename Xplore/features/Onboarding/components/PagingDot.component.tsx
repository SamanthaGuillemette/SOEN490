import React, { FunctionComponent } from "react";
import { Animated, StyleSheet } from "react-native";
import styles from "../screens/Onboarding.styles";

interface PagingProps {
  scale: any;
  color: any;
}
const PagingDot = (props: PagingProps) => {
  return (
    <Animated.View
      style={[
        styles.pagingDot,
        { backgroundColor: props.color, transform: [{ scale: props.scale }] },
      ]}
    />
  );
};

export default PagingDot;
