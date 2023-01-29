import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./SquaredButton.styles";

interface SquaredButtonProps {
  iconName: keyof typeof Feather.glyphMap;
}
export const SquaredButton = (props: SquaredButtonProps) => {
  const primaryBackground = useThemeColor("primaryBackground");
  return (
    <ShadowView style={[styles.button, { backgroundColor: primaryBackground }]}>
      <TouchableOpacity style={[{ backgroundColor: primaryBackground }]}>
        <Icon
          name={props.iconName}
          size="large"
          color="primary"
          style={styles.icon}
        />
      </TouchableOpacity>
    </ShadowView>
  );
};
