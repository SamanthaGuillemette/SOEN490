import { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { View } from "../../../components/";
import { useThemeColor } from "../../../hooks";
import { HomeHeader, ExploreProjects, TodayStats } from "../components";
import styles from "./Home.styles";

const Home = () => {
  const homeBackground = useThemeColor("backgroundSecondary");
  const scrollViewBackground = useThemeColor("background");
  const [isButtonExpanded, setIsButtonExpanded] = useState(true);

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsButtonExpanded(currentScrollPosition <= 0);
  };

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: scrollViewBackground }}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <HomeHeader />

        <View backgroundColor="background" style={styles.mainScreen}>
          <TodayStats />
          <ExploreProjects />
          <ExploreProjects />
        </View>
      </ScrollView>

      <AnimatedFAB
        icon={"plus"}
        label={"New Project"}
        extended={isButtonExpanded}
        onPress={() => console.log("Pressed")}
        visible={true}
        animateFrom={"right"}
        iconMode={"dynamic"}
        theme={{ roundness: 10 }}
        style={{
          position: "absolute",
          bottom: 120,
          right: 16,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
