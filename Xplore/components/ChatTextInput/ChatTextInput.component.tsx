import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import { View } from "../View";
import { useThemeColor } from "../../hooks";
import styles from "./ChatTextInput.styles";

interface ChatTextInputProps {}

export const ChatTextInput = ({}: ChatTextInputProps) => {
  const bodyText = useThemeColor("bodyText");
  const smallText = useThemeColor("smallText");

  return (
    <View backgroundColor="background">
      <ShadowView
        style={styles.textInputContainer}
        backgroundColor="backgroundSecondary"
      >
        <View style={styles.rightInputItems}>
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
