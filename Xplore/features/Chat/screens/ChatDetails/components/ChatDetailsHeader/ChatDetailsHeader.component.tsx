import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Icon, ShadowView, Text, View } from "../../../../../../components";
import styles from "./ChatDetailsHeader.styles";

interface ChatDetailsHeader {
  chatID: String;
  navigation: NavigationProp<any>;
}

const ChatDetailsHeader = (props: ChatDetailsHeader) => {
  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.headerBar}
    >
      <View style={styles.navLeftItems}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Chats")}>
          <Icon style={styles.arrowIcon} name="chevron-left" />
        </TouchableOpacity>
        <Text variant="h2">{props.chatID}</Text>
      </View>
      <View style={styles.navRightItems}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ChatSettings", { chatID: props.chatID })
          }
        >
          <Icon name="more-vertical" />
        </TouchableOpacity>
      </View>
    </ShadowView>
  );
};

export default ChatDetailsHeader;
