import { NavigationProp } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./LevelUp.styles";
import badgeAnimation from "../../../../assets/lottieFiles/badge.json";
import { PrimaryButton, Text } from "../../../../components";
import { Image, View } from "react-native";
import congratAnimation from "../../../../assets/lottieFiles/congratulation.json";

interface LevelUpProps {
  navigation: NavigationProp<any>;
}

const LevelUp = (props: LevelUpProps) => {
  const { navigation } = props;
  const badgeRef = useRef<Lottie>(null);
  const congratRef = useRef<Lottie>(null);
  const [isBadgeShown, setIsBadgeShown] = useState(false);

  useEffect(() => {
    badgeRef.current?.play();
    congratRef.current?.play();

    // Wait 3.2s before showing badge
    setTimeout(() => {
      setIsBadgeShown(true);
    }, 3200);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h2" color="titleText" style={styles.levelUpTitle}>
        LEVEL UP!
      </Text>

      <AnimatedLottieView
        ref={congratRef}
        source={congratAnimation}
        loop={false}
        speed={0.7}
      />

      <AnimatedLottieView
        ref={badgeRef}
        source={badgeAnimation}
        loop={false}
        style={styles.badgeAnimation}
        speed={0.7}
      />

      <View style={styles.bottomHalfContainer}>
        {isBadgeShown && (
          <Image
            source={require("../../../../assets/badge1.png")}
            style={styles.badgeImage}
          />
        )}

        <Text variant="h1" color="titleText" style={styles.levelTitle}>
          LEVEL 2
        </Text>
        <Text variant="body" color="bodyText" style={styles.levelDetails}>
          Congrats! You've reached a new level and earned a new badge.
        </Text>

        <PrimaryButton
          label="Continue"
          onPress={() => {
            navigation.navigate("BottomTabNavigator");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LevelUp;
