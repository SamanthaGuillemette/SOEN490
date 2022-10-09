import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Text } from "../Text";
import { View } from "../View";

interface LinkButtonProps {
  children: string;
  style?: StyleProp<ViewStyle>;
}

export const LinkButton = (props: LinkButtonProps) => {
  const { children, style } = props;

  return (
    <View style={style}>
      <TouchableOpacity>
        <Text variant="link" color="linkText" style={styles.linkButtonText}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  linkButtonText: {
    textDecorationLine: "underline",
  },
});
