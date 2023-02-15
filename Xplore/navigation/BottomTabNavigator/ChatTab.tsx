import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatDetails from "../../features/Chat/screens/ChatDetails/ChatDetails.screen";
import Chats from "../../features/Chat/screens/Chats/Chats.screen";
import ChatSettings from "../../features/Chat/screens/ChatSettings/ChatSettings.screen";

const ChatStack = createNativeStackNavigator();

const ChatTab = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ChatStack.Screen name="Chats" component={Chats} />
      <ChatStack.Screen name="ChatDetails" component={ChatDetails} />
      <ChatStack.Screen name="ChatSettings" component={ChatSettings} />
    </ChatStack.Navigator>
  );
};

export default ChatTab;
