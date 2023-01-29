import { ScrollView } from "react-native";
import { useRef } from "react";
import { useThemeColor } from "../../../../hooks";
import { NavigationProp } from "@react-navigation/native";
import styles from "./ProjectDiscussion.styles";
import ChatDate from "./components/ChatDate.Component";
import MessageBox from "./components//MessageBox.Component";
import MessageBar from "./components/MessageBar.Component";

interface DiscussionProps {
  navigation: NavigationProp<any>;
}

const ProjectDiscussion = ({}: DiscussionProps) => {
  const background = useThemeColor("background");
  const scrollViewRef: any = useRef();
  return (
    <ScrollView
      style={[styles.messages_container, { backgroundColor: background }]}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    >
      <ChatDate date={"Jan 20, 2023"} />
      <MessageBox
        text="Lorem ipsum dolor sit amet"
        image="https://picsum.photos/100"
        SR={true}
      />
      <MessageBox
        text="consectetur adipiscing elit, sed do eiusmod"
        image="https://picsum.photos/200"
        SR={false}
      />
      <MessageBox
        text="tempor incididunt ut labore et dolore magna aliqua"
        image="https://picsum.photos/300"
        SR={false}
      />
      <MessageBox
        text="Ut enim ad minim veniam"
        image="https://picsum.photos/400"
        SR={true}
      />
      <MessageBox
        text="pariatur"
        image="https://picsum.photos/500"
        SR={false}
      />
      <MessageBar />
    </ScrollView>
  );
};

export default ProjectDiscussion;
