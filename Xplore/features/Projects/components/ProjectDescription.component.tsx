import { ScrollView, SafeAreaView } from "react-native";
import ProjectDropDown from "./DropDown.component";
//import ProjectStats from "./ProjectStats.component";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../hooks";
import ProjectStatusBox from "./ProjectComponents/ProjectStatusBox.Component";
import styles from "./ProjectDescription.styles";

interface ProjectDescription {
  navigation: NavigationProp<any>;
}

const ProjectDescription = () => {
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    //
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ScrollView
        style={[styles.scrollViewStyle, { backgroundColor: background }]}
      >
        <ProjectStatusBox
          tasks={"13"}
          conversations={"20"}
          date={"August 12, 2022"}
        />
        <ProjectDropDown />
      </ScrollView>
    </SafeAreaView>
  );
  /*return (
    <ScrollView>
      <ProjectStats navigation={undefined} />
      <ProjectDropDown />
    </ScrollView>
  );*/
};

export default ProjectDescription;
