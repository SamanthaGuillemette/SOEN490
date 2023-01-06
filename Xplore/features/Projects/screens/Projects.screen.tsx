import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { View } from "../../../components";
import { useThemeColor } from "../../../hooks";
import ProjectCoreScreen from "../components/ProjectCoreScreen.component";
import TopHeader from "../../../navigation/TopHeader.component";
import { NavigationProp } from "@react-navigation/native";

interface ProjectsProps {
  navigation: NavigationProp<any>;
}

const Home = ({}: ProjectsProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView style={[{ backgroundColor: homeBackground }]}>
      <TopHeader screenName={"Projects"} navigation={undefined} />
      <View backgroundColor="background">
        <ProjectCoreScreen navigation={undefined} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
