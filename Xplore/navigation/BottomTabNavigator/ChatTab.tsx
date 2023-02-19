import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "../../features/Chat/screens/Chats/Chats.screen";

const ChatStack = createNativeStackNavigator();

const ChatTab = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ChatStack.Screen name="Chats" component={Chats} />
    </ChatStack.Navigator>
  );
};

export default ChatTab;
