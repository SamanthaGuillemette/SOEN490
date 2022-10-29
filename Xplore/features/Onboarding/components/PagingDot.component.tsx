import { Animated } from "react-native";
import { colors } from "../../../constants";
import styles from "./PagingDot.styles";

interface PagingProps {
  translateX: number;
  color: keyof typeof colors.light & keyof typeof colors.dark;
}

export const PagingDot = (props: PagingProps) => {
  const { translateX, color } = props;

  return (
    <Animated.View
      style={[
        styles.pagingDot,
        { backgroundColor: color, transform: [{ translateX }] },
      ]}
    />
  );
};
