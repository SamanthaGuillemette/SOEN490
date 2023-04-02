import { NavigationProp } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, Text } from "../../../../components";
import congratAnimation from "../../../../assets/lottieFiles/congratulation.json";
import styles from "./Completion.styles";
import { useThemeColor } from "../../../../hooks";
import { StatusBar } from "expo-status-bar";

interface CompletionProps {
  navigation: NavigationProp<any>;
}

const Completion = (props: CompletionProps) => {
  const { navigation } = props;
  const statusBarBg = useThemeColor("background");
  const congratRef = useRef<Lottie>(null);

  useEffect(() => {
    congratRef.current?.play();
  }, []);

  return (
    <>
      <StatusBar style="auto" backgroundColor={statusBarBg} />
      <SafeAreaView style={styles.container}>
        <AnimatedLottieView
          ref={congratRef}
          source={congratAnimation}
          loop={false}
          speed={0.7}
        />

        <View style={styles.checkContainer}>
          <Image
            style={styles.successCheck}
            source={require("../../../../assets/success-check.png")}
          />
        </View>

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
    </>
  );
};

export default Completion;
