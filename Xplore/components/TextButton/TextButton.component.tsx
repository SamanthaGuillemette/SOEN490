import {
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Text } from "../Text";
import styles from "./TextButton.styles";

interface TextButtonProps extends TouchableOpacityProps {
  children: string;
  style?: StyleProp<ViewStyle>;
}

export const TextButton = (props: TextButtonProps) => {
  const { children, ...restOfProps } = props;

  return (
    <View style={styles.skipButton}>
      <TouchableOpacity {...restOfProps}>
        <Text variant="body" color="bodyText">
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
