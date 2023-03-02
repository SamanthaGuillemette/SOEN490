import { ScrollView, SafeAreaView } from "react-native";
import { useQuery } from "react-query";
import { NavigationProp } from "@react-navigation/native";
import api from "../../../../services/appwrite/api";
import { useThemeColor } from "../../../../hooks";
import { useListChats, markAsSeen } from "../../../../services/api/chats";
import ChatBox from "./components/ChatBox/ChatBox.component";
import TopHeader from "../../../../navigation/TopHeader.component";
import { View } from "../../../../components";
import NoMessages from "./components/NoMessages/NoMessages.component";
import styles from "./Chats.styles";

interface ChatsProps {
  navigation: NavigationProp<any>;
}

const Chats = (props: ChatsProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  var chats: any;

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  chats = useListChats(userId);

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
                seen={chat.seen}
                time={new Date(chat.updatedAt).toLocaleDateString("en-us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                onPress={async () => {
                  try {
                    await markAsSeen(chat.chatType, chat.chatID, userId);
                    props.navigation.navigate("ChatDetails", {
                      chatID: chat.chatID,
                      chatType: chat.chatType,
                      username:
                        chat.chatType === "direct"
                          ? chat.contactID
                          : chat.chatName,
                    });
                  } catch (error) {
                    console.log("Error marking chat as seen: ", error);
                  }
                }}
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
