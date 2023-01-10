import { SafeAreaView } from "react-native";
import ProjectDropDown from "../DropDown/DropDown.component";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../../hooks";
import ProjectStatusBox from "../ProjectComponents/ProjectStatusBox/ProjectStatusBox.Component";
import styles from "./ProjectDescription.styles";

interface ProjectDescription {
  navigation: NavigationProp<any>;
}

const ProjectDescription = () => {
  const background = useThemeColor("background");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: background }]}
    >
      <ProjectStatusBox
        tasks={"13"}
        conversations={"20"}
        date={"August 12, 2022"}
        percent={63}
      />
      <ProjectDropDown />
    </SafeAreaView>
  );
};

export default ProjectDescription;
