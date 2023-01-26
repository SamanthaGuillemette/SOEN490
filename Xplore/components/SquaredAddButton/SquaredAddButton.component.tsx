import { TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./SquaredAddButton.styles";

export const SquaredAddButton = () => {
  const primaryBackground = useThemeColor("primaryBackground");
  return (
    <ShadowView style={[styles.button, { backgroundColor: primaryBackground }]}>
      <TouchableOpacity style={[{ backgroundColor: primaryBackground }]}>
        <Icon name="plus" size="large" color="primary" style={styles.icon} />
      </TouchableOpacity>
    </ShadowView>
  );
};
