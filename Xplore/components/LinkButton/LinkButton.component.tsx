import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "../Text";
import { View } from "../View";
import styles from "./LinkButton.styles";

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
