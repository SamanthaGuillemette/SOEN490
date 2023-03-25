import { View } from "../../../../components";
import ProjectNavBar from "./components/ProjectNavBar/ProjectNavBar.component";
import FeaturedImage from "./components/FeaturedImage/FeaturedImage.component";
import { NavigationProp } from "@react-navigation/native";

interface ProjectCoreProps {
  navigation: NavigationProp<any>;
  route: any;
}

const ProjectCore = (props: ProjectCoreProps) => {
  const item = props.route.params.item;
  const { navigation } = props;

  return (
    <View backgroundColor="background">
      <FeaturedImage
        projectName={item.name}
        source="https://picsum.photos/200"
      />
      <ProjectNavBar navigation={navigation} route={props.route} />
    </View>
  );
};

export default ProjectCore;
