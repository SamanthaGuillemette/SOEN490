import React from "react";
import { FlatList, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../../../../hooks/useThemeColor";
import ChatDate from "./components/ChatDate/ChatDate.component";
import LeftBubble from "./components/LeftBubble/LeftBubble.component";
import RightBubble from "./components/RightBubble/RightBubble.component";
import styles from "./Conversation.styles";
interface ConversationProps {
  navigation: NavigationProp<any>;
}

const Conversation = ({}: ConversationProps) => {
  const background = useThemeColor("background");
  const ref = React.useRef<FlatList>();
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

  const rendeMessages = ({ item }) => (
    <View style={{ backgroundColor: background }}>
      {item.user === "right" ? (
        <RightBubble text={item.text} image={item.image} />
      ) : (
        <LeftBubble text={item.text} image={item.image} />
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
        keyExtractor={(item) => item.id}
        ListHeaderComponent={getChatDate}
        ref={ref}
        onContentSizeChange={handleScrollToEnd}
      />
    </View>
  );
};

export default Conversation;
