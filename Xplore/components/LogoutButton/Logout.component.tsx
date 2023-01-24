import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  Image
} from "react-native";
import styles from "./Logout.styles";

interface LogoutButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const Logout = (props: LogoutButtonProps) => {
  const { style, ...restOfProps } = props;

  return (
    <TouchableOpacity
        style={[style, styles.logoutButton]}
        {...restOfProps}
    >
      <Image
        style={styles.logoutButton}
        source={require("../../assets/logout.png")}
      />
    </TouchableOpacity>
  );
};