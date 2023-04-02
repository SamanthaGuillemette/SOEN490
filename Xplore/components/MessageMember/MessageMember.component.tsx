import { COLLECTION_ID_DIRECT_CHATS } from "@env";
import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import api from "../../services/appwrite/api";
import { Query } from "appwrite";
import {
  markAsSeen,
  getContactInfo,
  createNewChat,
} from "../../services/api/chats";
import { View } from "../View";
import { User } from "../User";
import { ChipButton } from "../ChipButton";
import styles from "./MessageMember.styles";

interface MemberProps {
  navigation?: NavigationProp<any>;
  id: string;
  avatar: string;
  username: string;
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
      const chatExists = chatData.total === 1;
      const chatID = chatExists ? chatData.documents[0].chatID : null;
      const username = chatExists
        ? props.username
        : (await getContactInfo(props.id))[0].username;
      const chatInfo = {
        chatID,
        chatType: "direct",
        username,
      };
      if (chatExists) {
        await markAsSeen("direct", chatID, userId);
      } else {
        await createNewChat({
          userID: userId,
          contactID: props.id,
        });
        const newChatData = await api.listDocuments(
          COLLECTION_ID_DIRECT_CHATS,
          [Query.equal("userID", userId), Query.equal("contactID", props.id)]
        );
        chatInfo.chatID = newChatData.documents[0].chatID;
      }
      props.navigation?.navigate("ChatDetails", chatInfo);
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
