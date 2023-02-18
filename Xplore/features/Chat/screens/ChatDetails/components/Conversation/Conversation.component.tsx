import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { FlatList, View } from "react-native";
import api from "../../../../../../services/appwrite/api";
import { COLLECTION_ID_MESSAGES } from "@env";
import { Query } from "appwrite";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../../../../hooks/useThemeColor";
import ChatDate from "./components/ChatDate/ChatDate.component";
import LeftBubble from "./components/LeftBubble/LeftBubble.component";
import RightBubble from "./components/RightBubble/RightBubble.component";
import styles from "./Conversation.styles";

interface ConversationProps {
  navigation: NavigationProp<any>;
  chatID: string;
}

const Conversation = (props: ConversationProps) => {
  const background = useThemeColor("background");
  const ref = React.useRef<FlatList>(null);

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let currUserID: string = userdata?.$id as string;

  const messages = [
    {
      id: "1",
      user: "left",
      text: "hello",
      image: "https://picsum.photos/200",
    },
    {
      id: "2",
      user: "left",
      text: "It's Meeee",
      image: "https://picsum.photos/200",
    },
    {
      id: "3",
      user: "left",
      text: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur...",
      image: "https://picsum.photos/200",
    },
    {
      id: "4",
      user: "right",
      text: "Alright",
      image: "https://picsum.photos/200",
    },
    {
      id: "5",
      user: "right",
      text: "OKAYYYYYYYYY",
      image: "https://picsum.photos/200",
    },
    {
      id: "6",
      user: "right",
      text: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur...",
      image: "https://picsum.photos/200",
    },
    {
      id: "7",
      user: "left",
      text: "OHH",
      image: "https://picsum.photos/200",
    },
  ];

  // Quering chat details
  const { data } = useQuery("chat data", () =>
    api.listDocuments(COLLECTION_ID_MESSAGES, [
      Query.equal("chatID", props.chatID),
    ])
  );

  const rendeMessages = ({ item }) => (
    <Fragment key={item.index}>
      {data?.documents?.map((doc: any, index: number) => (
        <View key={index} style={{ backgroundColor: background }}>
          {doc.userID === currUserID ? (
            <RightBubble
              key={doc.$id}
              text={doc.message}
              msgTime={doc.$createdAt.slice(11, 16)}
              image={"https://picsum.photos/200"}
            />
          ) : (
            <LeftBubble
              key={doc.$id}
              text={doc.message}
              msgTime={doc.$createdAt.slice(11, 16)}
              image={"https://picsum.photos/200"}
            />
          )}
        </View>
      ))}
    </Fragment>
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
        keyExtractor={(item) => item.id}
        ListHeaderComponent={getChatDate}
        ref={ref}
        onContentSizeChange={handleScrollToEnd}
      />
    </View>
  );
};

export default Conversation;
