import { View } from "../../../components";
//import ProjectDropDown from "./DropDown.component";
import ProjectTitle from "./ProjectTitle.component";
import ProjectNavBar from "./ProjectNavBar.component";

const ProjectCoreScreen = () => {
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
