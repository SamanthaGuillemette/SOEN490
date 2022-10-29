import { Animated, View } from "react-native";
import { colors } from "../../../constants";
import { useThemeColor } from "../../../hooks";
import styles from "./PagingDot.styles";

interface PagingProps {
  translateX: Animated.AnimatedInterpolation;
  color: keyof typeof colors.light & keyof typeof colors.dark;
  isActive: boolean;
}

export const PagingDot = (props: PagingProps) => {
  const { translateX, color, isActive } = props;

  const bgColor = useThemeColor(color);
  // const activeWidth = isActive ? 20 : 8;
  // const activePosition = isActive ? "absolute" : "relative";

  return (
    <View>
      {isActive ? (
        <Animated.View
          style={[
            styles.pagingDot,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: bgColor,
              transform: [{ translateX }],
              width: 20,
              position: "absolute",
            },
          ]}
        />
      ) : (
        <View style={styles.pagingDot} />
      )}
    </View>
  );
};
