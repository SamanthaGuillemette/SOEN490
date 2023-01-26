import { ScrollView, SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import ChatBox from "../../components/ChatBox/ChatBox.Component";
import { TopHeader } from "../../../../components";
import styles from "./Chats.styles";
import { NavigationProp } from "@react-navigation/native";

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
        children={AllChats}
        title="Messages"
        iconNames={["search"]}
        iconColors={["smallText"]}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Chats;

const AllChats = (props: ChatsProps) => {
  const background = useThemeColor("background");

  return (
    <ScrollView
      style={[styles.chat_container, { backgroundColor: background }]}
    >
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
    </ScrollView>
  );
};
