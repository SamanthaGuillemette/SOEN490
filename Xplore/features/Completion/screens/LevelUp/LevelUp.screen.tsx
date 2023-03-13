import AnimatedLottieView from "lottie-react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import badgeAnimation from "../../../../assets/lottieFiles/badge.json";
import { PrimaryButton, Text } from "../../../../components";

const LevelUp = () => {
  const badgeRef = useRef<Lottie>(null);

  useEffect(() => {
    badgeRef.current?.play();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AnimatedLottieView
        ref={badgeRef}
        source={badgeAnimation}
        // loop={false}
        speed={0.7}
      />

      <Text variant="h2" color="titleText">
        LEVEL UP!
      </Text>
      <Text variant="h1" color="titleText">
        LEVEL 2
      </Text>
      <Text variant="body" color="bodyText">
        Congrats! You've reached a new level and earned a new badge.
      </Text>

      <PrimaryButton label="View Profile" />
    </SafeAreaView>
  );
};

export default LevelUp;
