import { COLLECTION_ID_DIRECT_CHATS } from "@env";
import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import api from "../../services/appwrite/api";
import { Query } from "appwrite";
import { markAsSeen, getContactInfo } from "../../services/api/chats";
import { View } from "../View";
import { User } from "../User";
import { ChipButton } from "../ChipButton";
import styles from "./MessageMember.styles";

interface MemberProps {
  navigation?: NavigationProp<any>;
  id: string;
  avatar: string;
  username: string;
  email?: string;
  xp: number;
}

export const MessageMember = (props: MemberProps) => {
  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  const onMessageClick = async () => {
    try {
      const chatData = await api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
        Query.equal("userID", userId),
        Query.equal("contactID", props.id),
      ]);
      console.log(chatData);
      // If the chat exists, mark it as seen and navigate to ChatDetails screen
      if (chatData.total === 1) {
        await markAsSeen("direct", chatData.documents[0].chatID, userId);
        props.navigation?.navigate("ChatDetails", {
          chatID: chatData.documents[0].chatID,
          chatType: "direct",
          username: props.username,
        });
      } else {
        const contactInfo = await getContactInfo(props.id);
        props.navigation?.navigate("ChatDetails", {
          chatType: "direct",
          username: contactInfo[0].username,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.user_container}>
      <View style={styles.usr}>
        <User
          id={props.id}
          avatar={props.avatar}
          username={props.username}
          xp={props.xp}
        />
      </View>
      <View style={styles.msg_button}>
        <ChipButton label="Message" onPress={onMessageClick} />
      </View>
    </View>
  );
};
