import { NavigationProp } from "@react-navigation/native";
import { TopHeader } from "../../../../components";

interface ChatDetailsHeader {
  username: string;
  navigation: NavigationProp<any>;
}

const ChatDetailsHeader = (props: ChatDetailsHeader) => {
  const { navigation, username } = props;

  return (
    <TopHeader
      title={username}
      icon1Name="phone"
      icon2Name="more-vertical"
      navigation={navigation}
    />
  );
};

export default ChatDetailsHeader;
