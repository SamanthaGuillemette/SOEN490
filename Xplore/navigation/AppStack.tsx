import { useState, useEffect } from "react";
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
import { Query } from "appwrite";
import { COLLECTION_ID_ONBOARDING } from "@env";
import ProjectEdit from "../features/ProjectCRUD/screens/ProjectEdit.screen";
import ProjectCreation from "../features/ProjectCRUD/screens/ProjectCreation.screen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [onboarding, setOnboarding] = useState<any | false>(false);

  // Current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  useEffect(() => {
    const getOnboarding = async () => {
      try {
        const onboarding_response = await api.listDocuments(
          COLLECTION_ID_ONBOARDING,
          [Query.equal("userID", userId)]
        );
        if(onboarding_response.total == 0 && userId){
          api.createDocument(COLLECTION_ID_ONBOARDING, {userID: userId, seen: true});
        }
        else {
          setOnboarding(
            onboarding_response?.documents[0]
          );
        }
      } catch (e) {
        console.log(e);
      }
    };
    getOnboarding();
  }, [userId]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {onboarding == undefined ? 
        <Stack.Screen name="Onboarding" component={Onboarding} />
        :
        <Stack.Screen name="ConditionalBottomTabNavigator" component={BottomTabNavigator} />
      }
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Completion" component={Completion} />
      <Stack.Screen name="LevelUp" component={LevelUp} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
      <Stack.Screen name="ChatSettings" component={ChatSettings} />
      <Stack.Screen name="TopicSelection" component={TopicSelection} />
      <Stack.Screen name="ProjectCreation" component={ProjectCreation} />
      <Stack.Screen name="ProjectEdit" component={ProjectEdit} />
    </Stack.Navigator>
  );
};

export default AppStack;
