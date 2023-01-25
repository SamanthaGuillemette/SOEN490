import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  Image
} from "react-native";
import styles from "./LogoutButton.styles";

interface LogoutButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { style, ...restOfProps } = props;

  return (
    <TouchableOpacity
        style={[style, styles.logoutButton]}
        {...restOfProps}
    >
      <Image
        style={styles.logoutButton}
        source={require("../../../../../assets/logout.png")}
      />
    </TouchableOpacity>
  );
};