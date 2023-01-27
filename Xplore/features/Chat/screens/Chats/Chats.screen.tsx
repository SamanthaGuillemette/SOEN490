import { ScrollView, SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import ChatBox from "./components/ChatBox/ChatBox.component";
import styles from "./Chats.styles";
import { NavigationProp } from "@react-navigation/native";
import { View, TopHeader } from "../../../../components";

interface ChatsProps {
  navigation: NavigationProp<any>;
}

const Chats = (props: ChatsProps) => {
  const { navigation } = props;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader
        screenName={"Messages"}
        iconNames={["search"]}
        iconColors={["smallText"]}
        children={ChatsCoreScreen}
      />
    </SafeAreaView>
  );
};

export default Chats;

const ChatsCoreScreen = (props: ChatsProps) => {
  const background = useThemeColor("background");

  return (
    <ScrollView
      style={[styles.chat_scrollView, { backgroundColor: background }]}
    >
      <View backgroundColor="background" style={styles.chat_container}>
        <ChatBox
          image="https://picsum.photos/200"
          username={"Josh Lewis"}
          lastText={"Lorem ipsum dolor sit amet consectetur... "}
          time={"5 min ago"}
          onPress={() =>
            props.navigation.navigate("ChatDetails", { name: "Josh Lewis" })
          }
        />
        <ChatBox
          image="https://picsum.photos/200"
          username={"Amy Lucas"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image="https://picsum.photos/200"
          username={"Landon Clayton"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image="https://picsum.photos/200"
          username={"Martin Carza"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image="https://picsum.photos/200"
          username={"Bernice Lewis"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image="https://picsum.photos/200"
          username={"Elva Moore"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
      </View>
    </ScrollView>
  );
};
