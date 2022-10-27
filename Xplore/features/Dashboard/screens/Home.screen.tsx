import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { View } from "../../../components/";
import { useThemeColor } from "../../../hooks";
import { HomeHeader, ExploreProjects, TodayStats } from "../components";
import styles from "./Home.styles";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");
  const scrollViewBackground = useThemeColor("background");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <ScrollView style={{ backgroundColor: scrollViewBackground }}>
        <HomeHeader />

        <View backgroundColor="background" style={styles.mainScreen}>
          <TodayStats />
          <ExploreProjects />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
