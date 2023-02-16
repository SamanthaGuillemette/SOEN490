import { View } from "../View";
import { User } from "../User";
import { ChipButton } from "../ChipButton";
import { NavigationProp } from "@react-navigation/native";
import { useMutation, useQuery } from "react-query";
import { COLLECTION_ID_DIRECT_CHATS } from "@env";
import api from "../../services/appwrite/api";
import styles from "./MessageMember.styles";

interface MemberProps {
  navigation: NavigationProp<any>;
  avatar: string;
  username: string;
  email: string;
  xp: number;
}

export const MessageMember = (props: MemberProps) => {
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  // This function will direct the user to the chat OR it will create a new chat
  const mutation = useMutation((chatData: Omit<Document, keyof Document>) =>
    api.createDocument(COLLECTION_ID_DIRECT_CHATS, chatData)
  );

  return (
    <View style={styles.user_container}>
      <View style={styles.usr}>
        <User avatar={props.avatar} username={props.username} xp={props.xp} />
      </View>
      <View style={styles.msg_button}>
        <ChipButton
          label="Message"
          onPress={() => {
            const chatData = {
              userEmail: userdata?.email,
              contactEmail: props.email,
            };
            mutation.mutate(chatData);
            props.navigation.navigate("ChatDetails", { name: "Josh Lewis" });
          }}
        />
      </View>
    </View>
  );
};
