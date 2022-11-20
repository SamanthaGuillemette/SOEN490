import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { View, ShadowView, Icon } from "../../../../../../components";
import { useThemeColor } from "../../../../../../hooks";
import styles from "./ChatTextInput.styles";

interface ChatTextInputProps {}

const ChatTextInput = ({}: ChatTextInputProps) => {
  const bodyText = useThemeColor("bodyText");
  const smallText = useThemeColor("smallText");

  return (
    <View backgroundColor="background">
      <ShadowView
        style={styles.textInputContainer}
        backgroundColor="backgroundSecondary"
      >
        <View style={styles.rightInputItems}>
          <TouchableOpacity>
            <Icon name="smile" />
          </TouchableOpacity>
          <RNTextInput
            placeholderTextColor={smallText}
            placeholder="Message ..."
            style={[styles.textInput, { color: bodyText }]}
          />
        </View>
        <TouchableOpacity>
          <Icon name="send" />
        </TouchableOpacity>
      </ShadowView>
    </View>
  );
};

export default ChatTextInput;
