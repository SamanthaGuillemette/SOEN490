import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Text } from "../Text";

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
    padding: 47,
    fontWeight: "bold",
  },
});
