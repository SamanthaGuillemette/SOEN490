import { NavigationProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { useThemeColor } from "../../../../hooks/useThemeColor";
import ChatDetailsHeader from "../../components/ChatDetailsHeader/ChatDetailsHeader.Comonent";
import styles from "./ChatDetails.styles";
interface ChatDetailsProps {
  navigation: NavigationProp<any>;
}

const ChatDetails = (props: ChatDetailsProps) => {
  const route = useRoute();
  let { name }: any = route.params;
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
    >
      <ChatDetailsHeader username={name} navigation={props.navigation} />
      <ScrollView style={{ backgroundColor: background }}></ScrollView>
    </SafeAreaView>
  );
};

export default ChatDetails;
