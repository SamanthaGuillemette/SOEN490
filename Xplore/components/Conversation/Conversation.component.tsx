import React, { useRef } from "react";
import { useQuery } from "react-query";
import { SectionList, View as RNView } from "react-native";
import api from "../../services/appwrite/api";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ChatDate } from "../ChatDate";
import { RightBubble } from "../RightBubble";
import { LeftBubble } from "../LeftBubble";
import { View } from "../View";
import { Text } from "../Text";
import styles from "./Conversation.styles";
import { useListMessages } from "../../services/api/chatMessages";

interface ConversationProps {
  navigation?: NavigationProp<any>;
  chatID: string;
}

export const Conversation = (props: ConversationProps) => {
  const background = useThemeColor("background");
  const sectionListRef = useRef(null);
  var messages: any;
  messages = useListMessages(props.chatID);

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let currUserID: string = userdata?.$id as string;

  const rendeMessages = ({ item }) => {
    if (!item) {
      return null; // or some other fallback behavior
    }
    return (
      <RNView key={item.id} style={{ backgroundColor: background }}>
        {item.userID === currUserID ? (
          <RightBubble
            key={item.id}
            username={item.username}
            text={item.message}
            msgTime={item.createdAt}
            image={item.avatar}
          />
        ) : (
          <LeftBubble
            key={item.id}
            username={item.username}
            text={item.message}
            msgTime={item.createdAt}
            image={item.avatar}
          />
        )}
      </RNView>
    );
  };

  return (
    <RNView
      style={[styles.messages_container, { backgroundColor: background }]}
    >
      {messages.length > 0 ? (
        <SectionList
          sections={messages}
          keyExtractor={(item, index) => item + index}
          renderItem={rendeMessages}
          renderSectionFooter={({ section }) => (
            <ChatDate
              date={new Date(section.title).toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
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
