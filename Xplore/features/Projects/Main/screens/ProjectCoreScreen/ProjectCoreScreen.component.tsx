import { View } from "../../../../../components";
import ProjectNavBar from "./components/ProjectNavBar/ProjectNavBar.component";
import FeaturedImage from "./components/FeaturedImage/FeaturedImage.component";

const ProjectCore = () => {
  return (
    <View backgroundColor="background">
      <FeaturedImage projectName="Snake Robot" source="" />
      <ProjectNavBar />
    </View>
  );
};

export default ProjectCore;
