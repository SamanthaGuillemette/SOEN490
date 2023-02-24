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
    const getMessages = async () => {
      try {
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
              chatType: "group",
              lastMessage: doc.lastMessage,
              updatedAt: doc.$updatedAt.slice(0, 10),
            }))
          );
        }
      } catch (e) {
        console.log(e);
      }
    };
    getMessages();
  }, [chatData?.documents, groupChatData?.documents, isFocused]);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Messages"} navigation={navigation} />
      <ScrollView
        style={[styles.chat_scrollView, { backgroundColor: background }]}
      >
        <View backgroundColor="background" style={styles.chat_container}>
          {directChats &&
            directChats?.map((chat: any) => (
              <ChatBox
                key={chat.chatIndex}
                image="https://picsum.photos/200"
                username={chat.contactID || chat.chatName}
                chatType={chat.chatType}
                lastText={chat.lastMessage}
                time={new Date(chat.updatedAt).toLocaleDateString("en-us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                onPress={() =>
                  props.navigation.navigate("ChatDetails", {
                    chatID: chat.chatID,
                    username: chat.contactID || chat.chatName,
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
