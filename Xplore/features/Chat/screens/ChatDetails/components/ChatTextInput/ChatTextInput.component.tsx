import { useState } from "react";
import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { View, ShadowView, Icon } from "../../../../../../components";
import { useThemeColor } from "../../../../../../hooks";
import { useQuery } from "react-query";
import { Query } from "appwrite";
import api from "../../../../../../services/appwrite/api";
import { COLLECTION_ID_DIRECT_CHATS, COLLECTION_ID_MESSAGES } from "@env";
import styles from "./ChatTextInput.styles";

interface ChatTextInputProps {
  chatID: string;
}

const ChatTextInput = (props: ChatTextInputProps) => {
  const bodyText = useThemeColor("bodyText");
  const smallText = useThemeColor("smallText");
  const [message, setMessage] = useState("");

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let usrID: string = userdata?.$id as string;

  // Quering chats associated with chatID
  const { data: chatData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_DIRECT_CHATS, [
      Query.equal("chatID", props.chatID),
    ])
  );

  // onSendClick Function
  async function onSendClick(msgData: any) {
    // Create a message
    api.createDocument(COLLECTION_ID_MESSAGES, msgData);
    // Update the last message for chat docs
    chatData?.documents.map((doc: any) => {
      api.updateDocument(COLLECTION_ID_DIRECT_CHATS, doc.$id, {
        userID: usrID,
        contactID: doc.contactID,
        chatID: props.chatID,
        lastMessage: msgData.message,
      });
    });
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

export default ChatTextInput;
