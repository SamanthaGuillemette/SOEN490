import { View } from "../../../components";
//import ProjectDropDown from "./DropDown.component";
import ProjectTitle from "./ProjectTitle.component";
import ProjectNavBar from "./ProjectNavBar.component";
import { NavigationProp } from "@react-navigation/native";

interface ProjectCoreScreenProps {
  navigation: NavigationProp<any>;
}

const ProjectCoreScreen = (props: ProjectCoreScreenProps) => {
  return (
    <View backgroundColor="background">
      <ProjectTitle />
      <View backgroundColor="background">
        <ProjectNavBar />
      </View>
    </View>
  );
};

export default ProjectCoreScreen;
