import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import IndividualTask from "../features/Projects/components/IndividualTask/IndividualTask.screen";
import { useUpdateOnboarding } from "../services/api/onboarding";

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
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen name="ChatSettings" component={ChatSettings} />
      <Stack.Screen name="TopicSelection" component={TopicSelection} />
      <Stack.Screen name="ProjectCreation" component={ProjectCreation} />
      <Stack.Screen name="ProjectEdit" component={ProjectEdit} />
      <Stack.Screen name="IndividualTask" component={IndividualTask} />
    </Stack.Navigator>
  );
};

export default AppStack;
