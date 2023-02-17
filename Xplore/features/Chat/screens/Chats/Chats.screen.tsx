import { ScrollView, SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import ChatBox from "./components/ChatBox/ChatBox.component";
import TopHeader from "../../../../navigation/TopHeader.component";
import styles from "./Chats.styles";
import { NavigationProp } from "@react-navigation/native";
import { View } from "../../../../components";

interface ChatsProps {
  navigation: NavigationProp<any>;
}

const Chats = (props: ChatsProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <TopHeader screenName={"Messages"} navigation={navigation} />
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
              props.navigation.navigate("ChatDetails", {
                name: "Josh Lewis",
                contactEmail: "josh@gmail.com",
              })
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
    </SafeAreaView>
  );
};

export default Chats;
