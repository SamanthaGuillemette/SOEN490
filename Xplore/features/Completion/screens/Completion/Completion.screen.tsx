import { NavigationProp } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, Text } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import congratAnimation from "../../../../assets/lottieFiles/congratulation.json";
import checkmarkAnimation from "../../../../assets/lottieFiles/checkmark.json";

interface CompletionProps {
  navigation: NavigationProp<any>;
}

const Completion = (props: CompletionProps) => {
  const { navigation } = props;
  const checkmarkRef = useRef<Lottie>(null);
  const congratRef = useRef<Lottie>(null);

  useEffect(() => {
    // Set sepecific animation startFrame & endFrame
    checkmarkRef.current?.play(0, 50);

    // Play all of animation file
    congratRef.current?.play();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AnimatedLottieView
        ref={congratRef}
        source={congratAnimation}
        loop={false}
        speed={0.7}
      />
      <AnimatedLottieView
        style={{
          marginTop: 30,
          width: deviceScreenWidth,
        }}
        ref={checkmarkRef}
        source={checkmarkAnimation}
        loop={false}
        speed={0.7}
      />
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "10%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text variant="h2" style={{ marginBottom: 10 }}>
          Congratulations!
        </Text>
        <Text variant="body" style={{ marginBottom: "40%" }}>
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
