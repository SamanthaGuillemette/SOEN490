import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Projects from "../../features/Projects/screens/Projects.screen";

const ProjectStack = createNativeStackNavigator();

const ProjectTab = () => {
  return (
    <ProjectStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProjectStack.Screen name="UserProjectsScreen" component={Projects} />
    </ProjectStack.Navigator>
  );
};

export default ProjectTab;
