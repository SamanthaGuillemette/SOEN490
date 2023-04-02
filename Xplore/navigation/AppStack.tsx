import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "../features/Profile/screens/Notification/Notification.screen";
import Chats from "../features/Chat/screens/Chats/Chats.screen";
import ChatDetails from "../features/Chat/screens/ChatDetails/ChatDetails.screen";
import ChatSettings from "../features/Chat/screens/ChatSettings/ChatSettings.screen";
import Completion from "../features/Completion/screens/Completion/Completion.screen";
import LevelUp from "../features/Completion/screens/LevelUp/LevelUp.screen";
import Onboarding from "../features/Onboarding/screens/Onboarding.screen";
import TopicSelection from "../features/TopicSelection/screen/TopicSelection.screen";
import BottomTabNavigator from "./BottomTabNavigator/BottomTabNavigator";
import api from "../services/appwrite/api";
import { useQuery } from "react-query";
import ProjectEdit from "../features/ProjectCRUD/screens/ProjectEdit.screen";
import ProjectCreation from "../features/ProjectCRUD/screens/ProjectCreation.screen";
import Search from "../features/Searching/Search.screen";
import IndividualTask from "../features/Projects/components/IndividualTask/IndividualTask.screen";
import { useUpdateOnboarding } from "../services/api/onboarding";
import ProjectDetails from "../features/Projects/screens/ProjectDetails/ProjectDetails.screen";
import { UserProjects } from "../features/Projects/screens";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  var onboardingSeen: any;

  // Current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  onboardingSeen = useUpdateOnboarding(userId);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {onboardingSeen === undefined ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Screen
          name="ConditionalBottomTabNavigator"
          component={BottomTabNavigator}
        />
      )}
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Completion" component={Completion} />
      <Stack.Screen name="LevelUp" component={LevelUp} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen name="ChatSettings" component={ChatSettings} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="TopicSelection" component={TopicSelection} />
      <Stack.Screen name="ProjectCreation" component={ProjectCreation} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
      <Stack.Screen name="ProjectEdit" component={ProjectEdit} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="IndividualTask" component={IndividualTask} />
      <Stack.Screen name="UserProjects" component={UserProjects} />
    </Stack.Navigator>
  );
};

export default AppStack;
