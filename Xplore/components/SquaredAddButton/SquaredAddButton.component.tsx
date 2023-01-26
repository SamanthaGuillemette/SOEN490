import { TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import styles from "./SquaredAddButton.styles";

export const SquaredAddButton = () => {
  const primaryBackground = useThemeColor("primaryBackground");
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: primaryBackground }]}
    >
      <Icon name="plus" size="large" color="primary" style={styles.icon} />
    </TouchableOpacity>
  );
};
