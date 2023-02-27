import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { SectionList, View as RNView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import api from "../../services/appwrite/api";
import { COLLECTION_ID_MESSAGES } from "@env";
import { Query } from "appwrite";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ChatDate } from "../ChatDate";
import { RightBubble } from "../RightBubble";
import { LeftBubble } from "../LeftBubble";
import { View } from "../View";
import { Text } from "../Text";
import styles from "./Conversation.styles";
// TO DO: SCROLL TO END
interface ConversationProps {
  navigation?: NavigationProp<any>;
  chatID: string;
}

export const Conversation = (props: ConversationProps) => {
  const background = useThemeColor("background");
  const sectionListRef = useRef(null);
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
            msgData?.documents?.map((doc: any) => {
              const createdAt = new Date(doc.$createdAt);
              return {
                id: doc.$id,
                chatID: doc.chatID,
                userID: doc.userID,
                message: doc.message,
                createdAt: createdAt.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                date: doc.$updatedAt.slice(0, 10),
              };
            })
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

      const messagesByDate = Object.keys(groupByDate).map((date) => {
        return {
          title: date,
          data: groupByDate[date],
        };
      });

      // Sort messages by title in ascending order
     // messagesByDate.sort((a, b) => a.title.localeCompare(b.title));
      
      // Sort messages by title in descending order
      messagesByDate.sort((a, b) => b.title.localeCompare(a.title));

      setMessagesByDate(messagesByDate);
      console.log(JSON.stringify(messagesByDate, null, 2));
    }
  }, [messages]);

  const rendeMessages = ({ item }) => {
    if (!item) {
      return null; // or some other fallback behavior
    }
    return (
      <RNView key={item.id} style={{ backgroundColor: background }}>
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
      </RNView>
    );
  };

  return (
    <RNView
      style={[styles.messages_container, { backgroundColor: background }]}
    >
      {messagesByDate.length > 0 ? (
        <SectionList
          sections={messagesByDate}
          keyExtractor={(item, index) => item + index}
          renderItem={rendeMessages}
          renderSectionFooter={({ section }) => (
            <ChatDate date={section.title} />
          )}
          stickySectionHeadersEnabled={false}
          ref={sectionListRef}
          refreshing={true}
          inverted={true}
        />
      ) : (
        <View backgroundColor="background" style={styles.startChat}>
          <Text color="primary" variant="body">
            Start Chatting!
          </Text>
        </View>
      )}
    </RNView>
  );
};
