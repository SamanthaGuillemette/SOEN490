import { ScrollView, SafeAreaView } from "react-native";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";
import { COLLECTION_ID_DIRECT_CHATS, COLLECTION_ID_USERS } from "@env";
import { Query } from "appwrite";
import { useThemeColor } from "../../../../hooks";
import ChatBox from "./components/ChatBox/ChatBox.component";
import TopHeader from "../../../../navigation/TopHeader.component";
import { NavigationProp } from "@react-navigation/native";
import { View } from "../../../../components";
import styles from "./Chats.styles";

interface ChatsProps {
  navigation: NavigationProp<any>;
}

const Chats = (props: ChatsProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  const { data: chatData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
      Query.equal("userID", userId),
    ])
  );

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Messages"} navigation={navigation} />
      <ScrollView
        style={[styles.chat_scrollView, { backgroundColor: background }]}
      >
        <View backgroundColor="background" style={styles.chat_container}>
          {chatData?.documents?.map((doc) => (
            <ChatBox
              image="https://picsum.photos/200"
              username={doc.userID}
              lastText={doc.lastMessage}
              time={doc.$createdAt.slice(0, 10)}
              onPress={() =>
                props.navigation.navigate("ChatDetails", {
                  chatID: doc.chatID,
                  name: "Josh Lewis",
                  contactEmail: "josh@gmail.com",
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
