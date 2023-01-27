import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import styles from "./SquaredAddButton.styles";

interface SquaredAddButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const SquaredAddButton = (props: SquaredAddButtonProps) => {
  const { ...restOfProps } = props;
  const primaryBackground = useThemeColor("primaryBackground");
  return (
    <ShadowView style={[styles.button, { backgroundColor: primaryBackground }]}>
      <TouchableOpacity
        {...restOfProps}
        style={[{ backgroundColor: primaryBackground }]}
      >
        <Icon name="plus" size="large" color="primary" style={styles.icon} />
      </TouchableOpacity>
    </ShadowView>
  );
};
