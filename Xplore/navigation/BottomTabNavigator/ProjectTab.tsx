import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../features/Searching/Search.screen";
import { UserProjects, ProjectDetails } from "../../features/Projects/screens";

const ProjectStack = createNativeStackNavigator();

const ProjectTab = () => {
  return (
    <ProjectStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProjectStack.Screen name="UserProjects" component={UserProjects} />
      <ProjectStack.Screen name="ProjectDetails" component={ProjectDetails} />
      <ProjectStack.Screen name="Search" component={Search} />
    </ProjectStack.Navigator>
  );
};

export default ProjectTab;
