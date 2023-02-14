import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./SquaredButton.styles";

interface SquaredButtonProps {
  iconName: keyof typeof Feather.glyphMap;
  onPress?: any;
}

export const SquaredButton = (props: SquaredButtonProps) => {
  const primaryBackground = useThemeColor("primaryBackground");
  const { ...restOfProps } = props;
  return (
    <ShadowView style={[styles.button, { backgroundColor: primaryBackground }]}>
      <TouchableOpacity
        style={[{ backgroundColor: primaryBackground }]}
        {...restOfProps}
      >
        <Icon
          name={props.iconName}
          size="large"
          color="primary"
          style={styles.icon}
          testId={props.iconName}
        />
      </TouchableOpacity>
    </ShadowView>
  );
};
