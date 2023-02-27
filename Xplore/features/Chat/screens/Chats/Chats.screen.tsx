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
import NoMessages from "./components/NoMessages/NoMessages.component";

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
  const [chats, setChats] = useState([]);

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  // This useEffect renders group and direct chats then combines them
  useEffect(() => {
    const getChats = async () => {
      try {
        const direct_chats_response = await api.listDocuments(
          COLLECTION_ID_DIRECT_CHATS,
          [Query.equal("userID", userId)]
        );
        setDirectChats(
          direct_chats_response?.documents?.map((doc: any) => ({
            chatIndex: doc.$id,
            chatID: doc.chatID,
            userID: doc.userID,
            contactID: doc.contactID,
            chatType: "direct",
            lastMessage: doc.lastMessage,
            updatedAt: doc.$updatedAt.slice(0, 10),
          }))
        );
        const group_chats_response = await api.listDocuments(
          COLLECTION_ID_GROUP_CHATS,
          [Query.equal("userID", userId)]
        );
        setGroupChats(
          group_chats_response?.documents?.map((doc: any) => ({
            chatIndex: doc.$id,
            chatID: doc.chatID,
            userID: doc.userID,
            chatName: doc.chatName,
            chatType: "group",
            lastMessage: doc.lastMessage,
            updatedAt: doc.$updatedAt.slice(0, 10),
          }))
        );
      } catch (e) {
        console.log(e);
      }
    };
    getChats();
  }, [userId, isFocused]);

  // This useEffect will combine chats and sort them by date.
  useEffect(() => {
    if (directChats && groupChats) {
      const allChats = directChats.concat(groupChats);
      allChats.sort(
        (chat1: any, chat2: any) =>
          new Date(chat2.updatedAt).getTime() -
          new Date(chat1.updatedAt).getTime()
      );
      setChats(allChats);
    }
  }, [directChats, groupChats]);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Messages"} navigation={navigation} />
      <ScrollView
        style={[styles.chat_scrollView, { backgroundColor: background }]}
      >
        <View backgroundColor="background" style={styles.chat_container}>
          {chats.length > 0 ? (
            chats.map((chat: any) => (
              <ChatBox
                key={chat.chatIndex}
                image="https://picsum.photos/200"
                username={
                  chat.chatType === "direct" ? chat.contactID : chat.chatName
                }
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
                    chatType: chat.chatType,
                    username:
                      chat.chatType === "direct"
                        ? chat.contactID
                        : chat.chatName,
                  })
                }
              />
            ))
          ) : (
            <NoMessages />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
