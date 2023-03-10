import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { Animated, Image, ScrollView, SafeAreaView } from "react-native";
import { Text, View, TextButton, PrimaryButton } from "../../../components";
import styles from "./Onboarding.styles";
import { PagingDot } from "../components/PagingDot.component";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../hooks";
import { deviceScreenWidth } from "../../../constants";
import api from "../../../services/appwrite/api";
import { useQuery } from "react-query";
import { Query } from "appwrite";
import { COLLECTION_ID_ONBOARDING } from "@env";
import BottomTabNavigator from "../../../navigation/BottomTabNavigator";

const onboardingImages = [
  {
    img: require("../../../assets/Onboarding1.png"),
    message: "Xplorify focuses on project-based learning",
  },
  {
    img: require("../../../assets/Onboarding2.png"),
    message: "Discover or create your own amazing project ideas",
  },
  {
    img: require("../../../assets/Onboarding3.png"),
    message: "Communicate with your team members in real-time",
  },
  {
    img: require("../../../assets/Onboarding4.png"),
    message: "Earn rewards upon project completion",
  },
  {
    img: require("../../../assets/Onboarding5.png"),
    message: "Stay engaged with the leaderboard",
  },
];

interface OnboardingProps {
  navigation: NavigationProp<any>;
}

const Onboarding = (props: OnboardingProps) => {
  const { navigation } = props;
  const whiteBackground = useThemeColor("backgroundSecondary");
  var onboardingSeen = false;

  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, deviceScreenWidth],
    outputRange: [0, 18], // 18 = margin + width of dot = (5+5) + 8
  });

  // Current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  const { data: onboardingData } = useQuery("onboarding data", () =>
    api.listDocuments(COLLECTION_ID_ONBOARDING, [
      Query.equal("userID", userId),
    ])
  );

  if(onboardingData?.total != 0 && userId){
    onboardingSeen = true;
  }

  useEffect(() => {
    const getOnboarding = async () => {
      try {
        const onboarding_response = await api.listDocuments(
          COLLECTION_ID_ONBOARDING,
          [Query.equal("userID", userId)]
        );
        if(onboarding_response.total == 0 && userId){
          api.createDocument(COLLECTION_ID_ONBOARDING, {userID: userId, seen: true});
        }
      } catch (e) {
        console.log(e);
      }
    };
    getOnboarding();
  }, [userId]);
  
  return (
    onboardingSeen ? <BottomTabNavigator/> :
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
                      onPress={() => navigation.navigate("TopicSelection")}
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

            <TextButton onPress={() => navigation.navigate("TopicSelection")}>
              SKIP
            </TextButton>
          </View>
        </View>
      </SafeAreaView>
  );
};

export default Onboarding;
