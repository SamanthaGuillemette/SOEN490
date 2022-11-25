import { ScrollView, SafeAreaView } from "react-native";
import ProjectDropDown from "./DropDown.component";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../hooks";
import ProjectStatusBox from "./ProjectComponents/ProjectStatusBox.Component";
import CircularPercentageBar from "./ProjectComponents/CircularPercentageBar.component";
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
          percent={63}
        />
        <ProjectDropDown />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectDescription;
