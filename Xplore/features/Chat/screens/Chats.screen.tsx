import { ScrollView } from "react-native";
import ChatBox from "../components/ChatBox.Component";
import styles from "./Chats.styles";
interface ChatsProps {}

const Chats = ({}: ChatsProps) => {
  return (
    <ScrollView style={styles.chat_container}>
      <ChatBox
        image={require("../../../assets/users/josh.jpg")}
        username={"Josh Lewis"}
        lastText={"Lorem ipsum dolor sit amet consectetur..."}
        time={"5 min ago"}
      />
      <ChatBox
        image={require("../../../assets/users/amy.jpg")}
        username={"Amy Lucas"}
        lastText={"Lorem ipsum dolor sit amet consectetur..."}
        time={"5 min ago"}
      />
      <ChatBox
        image={require("../../../assets/users/landon.jpg")}
        username={"Landon Clayton"}
        lastText={"Lorem ipsum dolor sit amet consectetur..."}
        time={"5 min ago"}
      />
      <ChatBox
        image={require("../../../assets/users/martin.jpg")}
        username={"Martin Carza"}
        lastText={"Lorem ipsum dolor sit amet consectetur..."}
        time={"5 min ago"}
      />
      <ChatBox
        image={require("../../../assets/users/bernice.jpg")}
        username={"Bernice Lewis"}
        lastText={"Lorem ipsum dolor sit amet consectetur..."}
        time={"5 min ago"}
      />
      <ChatBox
        image={require("../../../assets/users/elva.jpg")}
        username={"Elva Moore"}
        lastText={"Lorem ipsum dolor sit amet consectetur..."}
        time={"5 min ago"}
      />
    </ScrollView>
  );
};

export default Chats;
