import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./SquaredAddButton.styles";

interface SquaredAddButtonProps extends TouchableOpacityProps {
  iconName: keyof typeof Feather.glyphMap;
}

export const SquaredAddButton = (props: SquaredAddButtonProps) => {
  const { iconName, ...restOfProps } = props;
  const primaryBackground = useThemeColor("primaryBackground");
  return (
    <ShadowView style={[styles.button, { backgroundColor: primaryBackground }]}>
      <TouchableOpacity
        {...restOfProps}
        style={[{ backgroundColor: primaryBackground }]}
      >
        <Icon
          name={iconName}
          size="large"
          color="primary"
          style={styles.icon}
        />
      </TouchableOpacity>
    </ShadowView>
  );
};
