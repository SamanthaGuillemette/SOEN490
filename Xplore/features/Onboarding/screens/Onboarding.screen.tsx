import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Text, View, TextButton } from "../../../components";
import styles from "./Onboarding.styles";
import PagingDot from "../components/PagingDot.component";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../hooks";

const onboardingImages = [
  {
    img: require("../../../assets/Onboarding1.png"),
    // message: "Xplore is an application that focuses on project-based learning.",
    message: "Xplorify focuses on project-based learning",
  },
  {
    img: require("../../../assets/Onboarding2.png"),
    // message:
    //   "This application allows a user to explore or start new exciting projects.",
    message: "Discover or create your own amazing project ideas",
  },
  {
    img: require("../../../assets/Onboarding3.png"),
    // message:
    //   "The application also enables users to chat with other users on the platform.",
    message: "Communicate with your team members in real-time",
  },
  {
    img: require("../../../assets/Onboarding4.png"),
    // message:
    //   "Upon project completion, users will accumulate points and/or badges.",
    message: "Earn rewards upon project completion",
  },
  {
    img: require("../../../assets/Onboarding5.png"),
    // message:
    //   "A leaderboard featuring the top contributing users will be displayed.",
    message: "Stay engaged with the leaderboard",
  },
];

const screenWidth = Dimensions.get("screen").width;

interface OnboardingProps {
  navigation: NavigationProp<any>;
}

const Onboarding = (props: OnboardingProps) => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const { navigation } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");
  const translateX = scrollValue.interpolate({
    inputRange: [0, screenWidth],
    outputRange: [0, 20],
  });

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: whiteBackground }]}
    >
      <View backgroundColor="backgroundSecondary" style={styles.mainContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
            { useNativeDriver: false }
          )}
        >
          {onboardingImages.map((item, index) => (
            <View key={index} style={styles.singleSlide}>
              <Image source={item.img} style={styles.image} />
              <Text variant="h2" style={styles.onboardingText}>
                {item.message}
              </Text>
            </View>
          ))}
        </ScrollView>

        <TextButton onPress={() => navigation.navigate("Home")}>
          SKIP
        </TextButton>

        {/* <Animated.FlatList
          data={onboardingImages}
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
                <Text
                  style={styles.onboardingText}
                  variant="h3"
                  color="gray200"
                >
                  {item.message}
                </Text>
              </View>
            );
          }}
        /> */}
      </View>

      {/* <View style={styles.bottomContainer}>
        <FlatList
          horizontal
          data={onboardingImages}
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
      </View> */}
    </SafeAreaView>
  );
};

export default Onboarding;
