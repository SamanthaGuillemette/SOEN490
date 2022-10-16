import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Platform
} from "react-native";
import { Text } from "../Text";
import { multiplier } from "../../constants";

interface SkipButtonProps {
  children: string;
  style?: StyleProp<ViewStyle>;
  navigation: any;
}

export const SkipButton = (props: SkipButtonProps) => {
  const { children, navigation } = props;

  return (
    <TouchableOpacity onPress={navigation}>
      <Text variant="body" color="gray300" style={styles.skipButtonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  skipButtonText: {
    paddingRight: 48,
    paddingTop: Platform.OS === "ios" ? 42 * multiplier : 30,
  },
});
