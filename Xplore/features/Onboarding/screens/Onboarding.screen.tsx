import React, { FunctionComponent, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text as RNText,
} from "react-native";
import { colors } from "../../../constants";

const { width } = Dimensions.get("screen");

const Onboarding: FunctionComponent = (props: any) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [images, setimages] = useState([
    require("../assets/Onboarding1.png"),
    require("../assets/Onboarding2.png"),
    require("../assets/Onboarding3.png"),
  ]);

  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Animated.FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
            { useNativeDriver: false }
          )}
          pagingEnabled={true}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={style.imageContainer}>
                <Image style={style.image} source={item} key={index} />
              </View>
            );
          }}
        />
      </View>
      <View style={style.bottomContainer}>
        <FlatList
          horizontal
          data={images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const colorRange = ["#000", "grey", "#000"];
            const scaleRange = [1, 2, 1];
            const dotScale = animatedValue.interpolate({
              inputRange,
              outputRange: scaleRange,
              extrapolate: "clamp",
            });
            const color = animatedValue.interpolate({
              inputRange,
              outputRange: colorRange,
              extrapolate: "clamp",
            });
            return (
              <View style={style.dotContainer}>
                <PagingDot color={color} scale={dotScale} />
              </View>
            );
          }}
        />
        <TouchableOpacity>
          <RNText style={style.skipButton}>SKIP</RNText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PagingDot: FunctionComponent<{ scale: any; color: any }> = ({
  scale,
  color,
}) => {
  return (
    <Animated.View
      style={[
        style.pagingDot,
        { backgroundColor: color, transform: [{ scale }] },
      ]}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 2.2,
  },
  bottomContainer: {
    flex: 1,
    width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "flex-end",
    paddingBottom: 50,
    alignItems: "center",
    width,
  },
  image: {
    width: width - 80,
    height: 300,
    borderRadius: 40,
  },
  pagingDot: {
    width: 7,
    height: 7,
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  dotContainer: {
    width: 25,
    padding: 10,
    top: 115,
  },
  skipButton: {
    color: colors.light.gray500,
    top: -95,
    marginLeft: 220,
  },
});

export default Onboarding;
