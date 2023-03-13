import { useState } from "react";
import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { useQuery } from "react-query";
import api from "../../services/appwrite/api";
import { createMessage } from "../../services/api/chatMessages";
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
  let usrId: string = userdata?.$id as string;

  const onSendClick = () => {
    if (message !== "") {
      const msgData = {
        userID: usrId,
        chatID: props.chatID,
        message: message,
      };
      createMessage(msgData, props.chatType, props.chatID, usrId);
      setMessage("");
    }
  };
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
        <TouchableOpacity onPress={onSendClick}>
          <Icon name="send" color={message !== "" ? "primary" : "smallText"} />
        </TouchableOpacity>
      </ShadowView>
    </View>
  );
};
