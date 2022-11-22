import React, { useRef } from "react";
import { Animated, Image, ScrollView, SafeAreaView } from "react-native";
import { Text, View, TextButton, PrimaryButton } from "../../../components";
import styles from "./Onboarding.styles";
import { PagingDot } from "../components/PagingDot.component";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../hooks";
import { deviceScreenWidth } from "../../../constants";

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

interface OnboardingProps {
  navigation: NavigationProp<any>;
}

const Onboarding = (props: OnboardingProps) => {
  const { navigation } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");

  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, deviceScreenWidth],
    outputRange: [0, 18], // 18 = margin + width of dot = (5+5) + 8
  });

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, { backgroundColor: whiteBackground }]}
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
            <View
              backgroundColor="backgroundSecondary"
              key={index}
              style={styles.singleSlide}
            >
              <Image source={item.img} style={styles.image} />
              <Text variant="h2" style={styles.onboardingText}>
                {item.message}
              </Text>

              {/* If it's the last slide, show the "Get Started" button. NOTE: will be replaced with primary button */}
              {index === onboardingImages.length - 1 && (
                <View
                  backgroundColor="backgroundSecondary"
                  style={styles.getStartedButton}
                >
                  <PrimaryButton
                    label="Get Started"
                    onPress={() => navigation.navigate("Home")}
                  />
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <View
          backgroundColor="backgroundSecondary"
          style={styles.bottomContainer}
        >
          <View backgroundColor="backgroundSecondary">
            <View
              backgroundColor="backgroundSecondary"
              style={styles.dotContainer}
            >
              {onboardingImages.map((_, index) => (
                <PagingDot
                  color="generalGray"
                  translateX={translateX}
                  key={index}
                />
              ))}
            </View>

            <PagingDot
              color="primary"
              translateX={translateX}
              isActive={true}
              style={styles.activeDot}
            />
          </View>

          <TextButton onPress={() => navigation.navigate("Home")}>
            SKIP
          </TextButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
