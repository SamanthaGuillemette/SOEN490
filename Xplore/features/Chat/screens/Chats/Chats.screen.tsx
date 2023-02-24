import { useEffect, useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { useQuery } from "react-query";
import { NavigationProp, useIsFocused } from "@react-navigation/native";
import api from "../../../../services/appwrite/api";
import { COLLECTION_ID_DIRECT_CHATS, COLLECTION_ID_GROUP_CHATS } from "@env";
import { Query } from "appwrite";
import { useThemeColor } from "../../../../hooks";
import ChatBox from "./components/ChatBox/ChatBox.component";
import TopHeader from "../../../../navigation/TopHeader.component";
import { View } from "../../../../components";
import styles from "./Chats.styles";

interface ChatsProps {
  navigation: NavigationProp<any>;
}

const Chats = (props: ChatsProps) => {
  const { navigation } = props;
  const isFocused = useIsFocused();
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const [directChats, setDirectChats] = useState<any | null>(null);
  const [groupChats, setGroupChats] = useState<any | null>(null);

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  // Quering chats
  const { data: chatData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
      Query.equal("userID", userId),
    ])
  );

  // Quering chats
  const { data: groupChatData } = useQuery("group chat data", () =>
    api.listDocuments(COLLECTION_ID_GROUP_CHATS, [
      Query.equal("userID", userId),
    ])
  );

  useEffect(() => {
    if (isFocused) {
      setDirectChats(
        chatData?.documents?.map((doc: any) => ({
          chatIndex: doc.$id,
          chatID: doc.chatID,
          userID: doc.userID,
          contactID: doc.contactID,
          lastMessage: doc.lastMessage,
          updatedAt: doc.$updatedAt.slice(0, 10),
        }))
      );
      setGroupChats(
        groupChatData?.documents?.map((doc: any) => ({
          chatIndex: doc.$id,
          chatID: doc.chatID,
          userID: doc.userID,
          chatName: doc.chatName,
          lastMessage: doc.lastMessage,
          updatedAt: doc.$updatedAt.slice(0, 10),
        }))
      );
    }
  }, [chatData?.documents, groupChatData?.documents, isFocused]);
  const chats = directChats.concat(groupChats);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Messages"} navigation={navigation} />
      <ScrollView
        style={[styles.chat_scrollView, { backgroundColor: background }]}
      >
        <View backgroundColor="background" style={styles.chat_container}>
          {chats?.map((chat: any) => (
            <ChatBox
              key={chat.chatIndex}
              image="https://picsum.photos/200"
              username={chat.contactID || chat.chatName}
              lastText={chat.lastMessage}
              time={chat.updatedAt}
              onPress={() =>
                props.navigation.navigate("ChatDetails", {
                  chatID: chat.chatID,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
