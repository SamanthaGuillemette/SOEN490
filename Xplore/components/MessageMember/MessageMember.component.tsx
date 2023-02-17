import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import { COLLECTION_ID_DIRECT_CHATS } from "@env";
import api from "../../services/appwrite/api";
import { Query } from "appwrite";
import { View } from "../View";
import { User } from "../User";
import { ChipButton } from "../ChipButton";
import styles from "./MessageMember.styles";

interface MemberProps {
  navigation: NavigationProp<any>;
  avatar: string;
  username: string;
  email: string;
  xp: number;
}

export const MessageMember = (props: MemberProps) => {
  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  // Define chat data to be created
  const chatData = {
    userID: userId,
    contactID: props.email,
  };

  // Check if the chat exist
  const response = api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
    // TO BE FIXED
    Query.equal("userEmail", userId),
    Query.equal("contactEmail", props.email),
  ]);

  // onMessageClick Function
  const onMessageClick = () => {
    // If a chat already exist
    response.then(function (res) {
      if (res.total === 0) {
        api.createDocument(COLLECTION_ID_DIRECT_CHATS, chatData);
      }
    });
    props.navigation.navigate("ChatDetails", { name: props.username });
  };

  return (
    <View style={styles.user_container}>
      <View style={styles.usr}>
        <User avatar={props.avatar} username={props.username} xp={props.xp} />
      </View>
      <View style={styles.msg_button}>
        <ChipButton label="Message" onPress={onMessageClick} />
      </View>
    </View>
  );
};
