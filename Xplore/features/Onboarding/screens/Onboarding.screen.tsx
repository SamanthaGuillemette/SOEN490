import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text, SkipButton } from "../../../components";
import styles from "./Onboarding.styles";
import PagingDot from "../components/PagingDot.component";

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
        "Xplore is an application that facilitates learning programming technologies using project-based learning.",
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
        "Upon project completion, users will accumulate points and/or badges for participating in new projects and for finishing them.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.skipContainer}>
          <SkipButton style={styles.skipButton} navigation={toHome}>
            SKIP
          </SkipButton>
        </View>
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
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.img} key={index} />
                <Text style={styles.onboardingText} variant="h3">
                  {item.message}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
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
              <View style={styles.dotContainer}>
                <PagingDot color={color} scale={dotScale} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
