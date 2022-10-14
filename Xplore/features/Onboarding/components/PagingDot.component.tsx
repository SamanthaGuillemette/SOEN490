import React, { FunctionComponent } from "react";
import { Animated, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  pagingDot: {
    width: 7,
    height: 7,
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
});