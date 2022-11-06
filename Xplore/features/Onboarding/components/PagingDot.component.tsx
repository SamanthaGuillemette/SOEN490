import { Animated, StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../../constants";
import { useThemeColor } from "../../../hooks";
import styles from "./PagingDot.styles";

interface PagingProps {
  translateX: Animated.AnimatedInterpolation;
  color: keyof typeof colors.light & keyof typeof colors.dark;
  isActive?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const PagingDot = (props: PagingProps) => {
  const { translateX, color, isActive = false, style } = props;

  const bgColor = useThemeColor(color);

  return (
    <View>
      {isActive ? (
        <Animated.View
          style={[
            styles.pagingDot,
            style,
            {
              backgroundColor: bgColor,
              transform: [{ translateX }],
            },
          ]}
        />
      ) : (
        <View style={[styles.pagingDot, { backgroundColor: bgColor }]} />
      )}
    </View>
  );
};
