import { View } from "../../../../components";
import ProjectNavBar from "./components/ProjectNavBar/ProjectNavBar.component";
import FeaturedImage from "./components/FeaturedImage/FeaturedImage.component";
import { NavigationProp } from "@react-navigation/native";

interface ProjectCoreProps {
  navigation: NavigationProp<any>;
}

const ProjectCore = (props: ProjectCoreProps) => {
  const { navigation } = props;
  return (
    <View backgroundColor="background">
      <FeaturedImage projectName="Snake Robot" />
      <ProjectNavBar navigation={navigation} />
    </View>
  );
};

export default ProjectCore;
