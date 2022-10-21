import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { View } from "../../../components/";
import { useThemeColor } from "../../../hooks";
import { HomeHeader, ExploreProjects, TodayStats } from "../components";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <HomeHeader />

      <View backgroundColor="background" style={styles.mainScreen}>
        <TodayStats />
        <ExploreProjects />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
  },
  mainScreen: {
    paddingTop: 45,
    paddingHorizontal: 20,
    flex: 1,
  },
});
