import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Text } from "../../../components/";
import HomeHeader from "../components/HomeHeader.component";
import StatBoxLarge from "../components/StatBoxLarge.component";
import StatBoxSmall from "../components/StatBoxSmall.component";

interface HomeProps {
  navigation: any;
}
const Home = (props: HomeProps) => {
  const toOnboarding = () => props.navigation.navigate("Onboarding");

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
          <TouchableOpacity onPress={toOnboarding}>
            <Text variant="h2">TO ONBOARDING</Text>
          </TouchableOpacity>
        </View>
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
