import { useState } from "react";
import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { useQuery } from "react-query";
import { Query } from "appwrite";
import api from "../../services/appwrite/api";
import {
  COLLECTION_ID_DIRECT_CHATS,
  COLLECTION_ID_GROUP_CHATS,
  COLLECTION_ID_MESSAGES,
} from "@env";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import { View } from "../View";
import styles from "./ChatTextInput.styles";

interface ChatTextInputProps {
  chatID: string;
  chatType: string;
}

export const ChatTextInput = (props: ChatTextInputProps) => {
  const bodyText = useThemeColor("bodyText");
  const smallText = useThemeColor("smallText");
  const [message, setMessage] = useState("");

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let usrID: string = userdata?.$id as string;

  // onSendClick Function
  async function onSendClick(msgData: any) {
    try {
      // Create a message
      api.createDocument(COLLECTION_ID_MESSAGES, msgData);
      // Update last message
      if (props.chatType === "group") {
        const response = await api.listDocuments(COLLECTION_ID_GROUP_CHATS, [
          Query.equal("chatID", props.chatID),
        ]);
        response?.documents?.map((doc: any) => {
          api.updateDocument(COLLECTION_ID_GROUP_CHATS, doc.$id, {
            userID: doc.userID,
            chatName: doc.chatName,
            chatID: props.chatID,
            lastMessage: msgData.message,
          });
        });
      } else {
        const response = await api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
          Query.equal("chatID", props.chatID),
        ]);
        response?.documents?.map((doc: any) => {
          api.updateDocument(COLLECTION_ID_DIRECT_CHATS, doc.$id, {
            userID: doc.userID,
            contactID: doc.contactID,
            chatID: props.chatID,
            lastMessage: msgData.message,
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View backgroundColor="background">
      <ShadowView
        style={styles.textInputContainer}
        backgroundColor="backgroundSecondary"
      >
        <View style={styles.rightInputItems}>
          <RNTextInput
            placeholderTextColor={smallText}
            placeholder={"Message ..."}
            autoCapitalize={"none"}
            value={message}
            onChangeText={(thisMessage) => setMessage(thisMessage)}
            style={[styles.textInput, { color: bodyText }]}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (message !== "") {
              const msgData = {
                userID: usrID,
                chatID: props.chatID,
                message: message,
              };
              onSendClick(msgData);
              setMessage("");
            }
          }}
        >
          <Icon name="send" color={message !== "" ? "primary" : "smallText"} />
        </TouchableOpacity>
      </ShadowView>
    </View>
  );
};
