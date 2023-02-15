import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Icon, ShadowView, Text, View } from "../../../../../../components";
import styles from "./ChatDetailsHeader.styles";

interface ChatDetailsHeader {
  username: String;
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
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon style={styles.arrowIcon} name="chevron-left" />
        </TouchableOpacity>
        <Text variant="h2">{props.username}</Text>
      </View>
      <View style={styles.navRightItems}>
        <TouchableOpacity>
          <Icon style={styles.phoneIcon} name="phone" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ChatSettings", { name: "Josh Lewis" })
          }
        >
          <Icon name="more-vertical" />
        </TouchableOpacity>
      </View>
    </ShadowView>
  );
};

export default ChatDetailsHeader;
