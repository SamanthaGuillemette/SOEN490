import * as React from "react";
import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import ProjectCoreScreen from "./ProjectCoreScreen/ProjectCoreScreen.component";
import { TopHeader } from "../../../components";
import { NavigationProp } from "@react-navigation/native";
import styles from "./Projects.styles";

interface ProjectsProps {
  navigation: NavigationProp<any>;
}

const Home = (props: ProjectsProps) => {
  const homeBackground = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: homeBackground }]}
    >
      <TopHeader
        screenName={"Projects"}
        iconNames={["edit", "search"]}
        iconColors={["primary", "smallText"]}
        children={ProjectCoreScreen}
      />
    </SafeAreaView>
  );
};

export default Home;
