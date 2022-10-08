import * as React from "react";
import {
  PixelRatio,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "../../../components/";
import HomeHeader from "../components/HomeHeader.component";
import StatBoxLarge from "../components/StatBoxLarge.component";
import StatBoxSmall from "../components/StatBoxSmall.component";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <HomeHeader />

      <View style={styles.mainScreen}>
        <Text variant="h2">Today</Text>
        <View style={styles.todayStats}>
          <View>
            <StatBoxLarge />
            <StatBoxSmall />
          </View>
          <View>
            <StatBoxSmall />
            <StatBoxLarge />
          </View>
        </View>

        <Text variant="h2">Current ratio is: {PixelRatio.get()}</Text>
        <Text variant="h2">
          Current font ratio is: {PixelRatio.getFontScale()}
        </Text>
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
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  todayStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
