import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "../../features/Chat/screens/Chats/Chats.screen";

const ChatGroup = createNativeStackNavigator();

const ChatGroupTab = () => {
  return (
    <ChatGroup.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ChatGroup.Screen name="Chats" component={Chats} />
    </ChatGroup.Navigator>
  );
};

export default ChatGroupTab;
