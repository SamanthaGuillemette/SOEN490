import { View } from "../../../../components";
import ProjectNavBar from "../ProjectNavBar/ProjectNavBar.component";
import ShadowImage from "../ProjectComponents/ShadowImage/ShadowImage.component";

const ProjectCore = () => {
  return (
    <View backgroundColor="background">
      <ShadowImage projectName="Snake Robot" source="" />
      <ProjectNavBar />
    </View>
  );
};

export default ProjectCore;
