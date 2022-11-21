import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { View } from "../../../components";
import { useThemeColor } from "../../../hooks";
import ProjectCoreScreen from "../components/ProjectCoreScreen.component";
import TopHeader from "../../../navigation/TopHeader.Component";
import { NavigationProp } from "@react-navigation/native";

interface ProjectsProps {
  navigation: NavigationProp<any>;
}

const Home = ({}: ProjectsProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <TopHeader screenName={"Projects"} navigation={undefined} />

      <View backgroundColor="background" style={styles.mainScreen}>
        <ProjectCoreScreen navigation={undefined} />
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
