import { ScrollView, SafeAreaView } from "react-native";
import { useThemeColor } from "../../../hooks";
import Discussion from "./ProjectComponents/Discussion.component";
import styles from "./ProjectDiscussion.styles";
import { NavigationProp } from "@react-navigation/native";

interface ChatsProps {
  navigation: NavigationProp<any>;
}

const Chats = (props: ChatsProps) => {
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ScrollView
        style={[styles.chat_container, { backgroundColor: background }]}
      >
        <Discussion
          image="https://picsum.photos/200"
          username={"Josh Lewis"}
          lastText={"Lorem ipsum dolor sit amet consectetur... "}
          time={"5 min ago"}
          onPress={() =>
            props.navigation.navigate("ChatDetails", { name: "Josh Lewis" })
          }
        />
        <Discussion
          image="https://picsum.photos/200"
          username={"Amy Lucas"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <Discussion
          image="https://picsum.photos/200"
          username={"Landon Clayton"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <Discussion
          image="https://picsum.photos/200"
          username={"Martin Carza"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <Discussion
          image="https://picsum.photos/200"
          username={"Bernice Lewis"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <Discussion
          image="https://picsum.photos/200"
          username={"Elva Moore"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
