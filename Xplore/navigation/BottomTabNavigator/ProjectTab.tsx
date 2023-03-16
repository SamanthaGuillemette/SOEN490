import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProjects from "../../features/Projects/screens/UserProjects.screen";

const ProjectStack = createNativeStackNavigator();

const ProjectTab = () => {
  return (
    <ProjectStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProjectStack.Screen name="UserProjectsScreen" component={UserProjects} />
    </ProjectStack.Navigator>
  );
};

export default ProjectTab;
