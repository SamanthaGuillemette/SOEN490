import { View } from "../../../../components";
import ProjectNavBar from "./components/ProjectNavBar/ProjectNavBar.component";
import FeaturedImage from "./components/FeaturedImage/FeaturedImage.component";
import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

interface ProjectCoreProps {
  navigation: NavigationProp<any>;
}

const ProjectCore = (props: ProjectCoreProps) => {
  const { navigation } = props;
  const route = useRoute();
  let { item }: any = route.params;

  return (
    <View backgroundColor="background">
      <FeaturedImage projectName={item.name} source={item.projectImage} />
      <ProjectNavBar navigation={navigation} />
    </View>
  );
};

export default ProjectCore;
