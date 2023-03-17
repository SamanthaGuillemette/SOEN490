import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectDetails from "../../features/Projects/screens/ProjectDetails/ProjectDetails.screen";

const ProjectStack = createNativeStackNavigator();

const ProjectTab = () => {
  return (
    <ProjectStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProjectStack.Screen name="ProjectDetails" component={ProjectDetails} />
    </ProjectStack.Navigator>
  );
};

export default ProjectTab;
