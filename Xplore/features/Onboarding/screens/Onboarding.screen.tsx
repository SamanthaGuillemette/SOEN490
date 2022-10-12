import React, { FunctionComponent, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text as RNText,
  FlatList,
} from "react-native";
import { colors } from "../../../constants";
import { Text } from "../../../components";

const { width } = Dimensions.get("screen");

interface OnboardingProps {
  navigation: any;
}

const Onboarding = (props: OnboardingProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const toHome = () => props.navigation.navigate("Home");
  const images = [
    {
      img: require("../../../assets/Onboarding1.png"),
      message:
        "Xplore is an application which facilitates learning programming technologies using project-based learning.",
    },
    {
      img: require("../../../assets/Onboarding2.png"),
      message:
        "This application allows a user to explore or start new projects which can later be shared within the community.",
    },
    {
      img: require("../../../assets/Onboarding3.png"),
      message:
        "The application also enables users to chat with people working on the same project or with other members on the platform.",
    },
    {
      img: require("../../../assets/Onboarding4.png"),
      message:
        "Upon project completion, users will accumulate points and/or new badges for participating in new projects and for finishing them.",
    },
  ];

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
              <View style={style.skipContainer}>
                <TouchableOpacity onPress={toHome}>
                  <Text variant="body" style={style.skipButton}>
                    SKIP
                  </Text>
                </TouchableOpacity>
                <View style={[style.imageContainer, { bottom: 20 }]}>
                  <Image style={style.image} source={item.img} key={index} />
                  <Text
                    style={[style.onboardingText, { top: 10 }]}
                    variant="onboarding"
                  >
                    {item.message}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={[style.bottomContainer, { right: 130, top: 50 }]}>
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
    flex: 4,
  },
  bottomContainer: {
    flex: 1,
    width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  skipContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageContainer: {
    justifyContent: "flex-end",
    width,
    alignItems: "center",
  },
  image: {
    width: width - 80,
    height: 300,
    borderRadius: 40,
  },
  onboardingText: {
    width: width - 80,
    color: colors.light.gray200,
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
    width: 21,
    padding: 10,
    top: 60,
  },
  skipButton: {
    color: colors.light.gray500,
    padding: 47,
    fontWeight: "bold",
  },
});

export default Onboarding;
