import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Projects from "../../features/Projects/screens/Projects.screen";

const ProjectGroup = createNativeStackNavigator();

const ProjectGroupTab = () => {
  return (
    <ProjectGroup.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProjectGroup.Screen name="UserProjectsScreen" component={Projects} />
    </ProjectGroup.Navigator>
  );
};

export default ProjectGroupTab;
