import {
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import { Text } from "../Text";
import { View } from "../View";
import styles from "./LinkButton.styles";

interface LinkButtonProps extends TouchableOpacityProps {
  children: string;
  style?: StyleProp<ViewStyle>;
}

export const LinkButton = (props: LinkButtonProps) => {
  const { children, style, ...restOfProps } = props;

  return (
    <View style={style}>
      <TouchableOpacity {...restOfProps}>
        <Text variant="link" color="linkText" style={styles.linkButtonText}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
