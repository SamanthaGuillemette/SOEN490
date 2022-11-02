import { ScrollView, SafeAreaView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useThemeColor } from "../../../../hooks";
import ChatBox from "../../components/ChatBox/ChatBox.Component";
import TopHeader from "../../../../navigation/TopHeader.Component";
import styles from "./Chats.styles";

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
      <TopHeader
        screenName={"Messages"}
        navigation={() => props.navigation.navigate("BottomTabNavigator")}
      />
      <ScrollView
        style={[styles.chat_container, { backgroundColor: background }]}
      >
        <ChatBox
          image={require("../../../../assets/users/josh.jpg")}
          username={"Josh Lewis"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
          onPress={() =>
            props.navigation.navigate("ChatDetails", { name: "Josh Lewis" })
          }
        />
        <ChatBox
          image={require("../../../../assets/users/amy.jpg")}
          username={"Amy Lucas"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image={require("../../../../assets/users/landon.jpg")}
          username={"Landon Clayton"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image={require("../../../../assets/users/martin.jpg")}
          username={"Martin Carza"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image={require("../../../../assets/users/bernice.jpg")}
          username={"Bernice Lewis"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
        <ChatBox
          image={require("../../../../assets/users/elva.jpg")}
          username={"Elva Moore"}
          lastText={"Lorem ipsum dolor sit amet consectetur..."}
          time={"5 min ago"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
