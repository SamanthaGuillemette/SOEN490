import { View } from "../../../../components";
import ProjectNavBar from "./components/ProjectNavBar/ProjectNavBar.component";
import ShadowImage from "./components/ShadowImage/ShadowImage.component";

const ProjectCore = () => {
  return (
    <View backgroundColor="background">
      <ShadowImage projectName="Snake Robot" source="" />
      <ProjectNavBar />
    </View>
  );
};

export default ProjectCore;
