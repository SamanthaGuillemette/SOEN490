import React, { FunctionComponent } from "react";
import { Animated, StyleSheet } from "react-native";

const PagingDot: FunctionComponent<{ scale: any; color: any }> = ({
    scale,
    color,
}) => {
    return (
        <Animated.View
            style={[
            styles.pagingDot,
            { backgroundColor: color, transform: [{ scale }] },
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
        borderColor: "grey"
    }
});