import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants";
import { Text } from "../Text";
import { View } from "../View";

interface LinkButtonProps {
  children: string;
  backgroundColor?: keyof typeof colors.light & keyof typeof colors.dark;
  style?: StyleProp<ViewStyle>;
}

export const LinkButton = (props: LinkButtonProps) => {
  const { children, backgroundColor, style } = props;

  return (
    <View backgroundColor={backgroundColor} style={style}>
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
