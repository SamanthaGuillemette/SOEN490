import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { FlatList, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import api from "../../services/appwrite/api";
import { COLLECTION_ID_MESSAGES } from "@env";
import { Query } from "appwrite";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ChatDate } from "../ChatDate";
import { RightBubble } from "../RightBubble";
import { LeftBubble } from "../LeftBubble";
import styles from "./Conversation.styles";

interface ConversationProps {
  navigation?: NavigationProp<any>;
  chatID: string;
}

export const Conversation = (props: ConversationProps) => {
  const background = useThemeColor("background");
  const ref = React.useRef<FlatList>(null);
  const [messages, setMessages] = useState<any | null>(null);
  const isFocused = useIsFocused();

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let currUserID: string = userdata?.$id as string;

  // Quering chat details
  const { data: msgData } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_MESSAGES, [
      Query.equal("chatID", props.chatID),
    ])
  );

  useEffect(() => {
    if (isFocused) {
      setMessages(
        msgData?.documents?.map((doc: any) => ({
          id: doc.$id,
          chatID: doc.chatID,
          userID: doc.userID,
          message: doc.message,
          createdAt: doc.$createdAt.slice(11, 16),
          date: doc.$updatedAt.slice(0, 10),
        }))
      );
    }
  }, [msgData?.documents, isFocused]);

  // const groupByDate = messages.reduce((group, message) => {
  //   const { date } = message;
  //   group[date] = group[date] ?? [];
  //   group[date].push(message);
  //   return group;
  // }, {});
  // console.log(groupByDate);

  const rendeMessages = ({ item }) => (
    <View key={item.id} style={{ backgroundColor: background }}>
      {item.userID === currUserID ? (
        <RightBubble
          key={item.id}
          text={item.message}
          msgTime={item.createdAt}
          image={"https://picsum.photos/200"}
        />
      ) : (
        <LeftBubble
          key={item.id}
          text={item.message}
          msgTime={item.createdAt}
          image={"https://picsum.photos/200"}
        />
      )}
    </View>
  );

  const getChatDate = () => {
    return <ChatDate date={"Jun 25, 2022"} />;
  };

  function handleScrollToEnd(width: number, height: number) {
    if (ref.current) {
      ref.current.scrollToOffset({ offset: height });
    }
  }

  return (
    <View style={[styles.messages_container, { backgroundColor: background }]}>
      <FlatList
        data={messages}
        renderItem={rendeMessages}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={getChatDate}
        ref={ref}
        onContentSizeChange={handleScrollToEnd}
      />
    </View>
  );
};