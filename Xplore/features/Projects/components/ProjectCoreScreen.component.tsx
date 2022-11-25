import { View } from "../../../components";
import ProjectNavBar from "./ProjectNavBar.component";
import ShadowImage from ".//ProjectComponents/ShadowImage.component";

const ProjectCore = () => {
  return (
    <View backgroundColor="background">
      <ShadowImage projectName="Snake Robot" source="" />
      <View backgroundColor="background">
        <ProjectNavBar />
      </View>
    </View>
  );
};

export default ProjectCore;
