import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { SectionList, View } from "react-native";
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
  const ref = React.useRef<SectionList>(null);
  const [messages, setMessages] = useState<any | null>(null);
  const [messagesByDate, setMessagesByDate] = useState<any[]>([]);
  const isFocused = useIsFocused();

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let currUserID: string = userdata?.$id as string;

  // This useEffect will generate the messages of the chat
  useEffect(() => {
    const getMessages = async () => {
      try {
        if (isFocused) {
          const msgData = await api.listDocuments(COLLECTION_ID_MESSAGES, [
            Query.equal("chatID", props.chatID),
          ]);
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
      } catch (e) {
        console.log(e);
      }
    };
    getMessages();
  }, [props.chatID, isFocused]);

  // This useEffect will group the messages of the chat by date
  useEffect(() => {
    if (messages) {
      const groupByDate = messages.reduce((group: any, message: any) => {
        const { date, ...rest } = message;
        group[date] = group[date] ?? [];
        group[date].push(rest);
        return group;
      }, {});
      const messagesByDate = Object.keys(groupByDate).map((date) => ({
        title: date,
        data: groupByDate[date],
      }));
      setMessagesByDate(messagesByDate);
    }
  }, [messages]);

  const rendeMessages = ({ item }) => {
    if (!item) {
      return null; // or some other fallback behavior
    }
    return (
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
  };
  // function handleScrollToEnd(width: number, height: number) {
  //   if (ref.current) {
  //     ref.current.scrollToOffset({ offset: height });
  //   }
  // }

  return (
    <View style={[styles.messages_container, { backgroundColor: background }]}>
      {messagesByDate && (
        <SectionList
          sections={messagesByDate}
          keyExtractor={(item, index) => item + index}
          renderItem={rendeMessages}
          renderSectionHeader={({ section }) => (
            <ChatDate date={section.title} />
          )}
        />
      )}
    </View>
  );
};
