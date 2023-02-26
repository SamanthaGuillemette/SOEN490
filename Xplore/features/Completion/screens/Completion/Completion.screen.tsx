import { NavigationProp } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, Text } from "../../../../components";
import congratAnimation from "../../../../assets/lottieFiles/congratulation.json";
import checkmarkAnimation from "../../../../assets/lottieFiles/checkmark.json";
import styles from "./Completion.styles";

interface CompletionProps {
  navigation: NavigationProp<any>;
}

const Completion = (props: CompletionProps) => {
  const { navigation } = props;
  const checkmarkRef = useRef<Lottie>(null);
  const congratRef = useRef<Lottie>(null);

  useEffect(() => {
    checkmarkRef.current?.play(0, 50); // Set sepecific animation startFrame & endFrame
    congratRef.current?.play(); // Play all of animation file
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedLottieView
        ref={congratRef}
        source={congratAnimation}
        loop={false}
        speed={0.7}
      />
      <AnimatedLottieView
        style={styles.greenCheck}
        ref={checkmarkRef}
        source={checkmarkAnimation}
        loop={false}
        speed={0.7}
      />

      <View style={styles.bottomHalfContainer}>
        <Text variant="h2" color="titleText" style={styles.congratTitle}>
          Congratulations!
        </Text>
        <Text variant="body" color="bodyText" style={styles.congratText}>
          You have just completed the project!
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

export default Completion;
