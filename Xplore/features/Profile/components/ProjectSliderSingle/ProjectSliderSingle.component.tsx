import { Image, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text } from "../../../../components";
import { colors } from "../../../../constants";
import styles from "./ProjectSliderSingle.styles";

interface ProjectSliderSingleProps {
  index: number;
  scrollY: Animated.SharedValue<number>;
  itemWidth: number;
}

export const ProjectSliderSingle = (props: ProjectSliderSingleProps) => {
  const { index, scrollY, itemWidth } = props;
  const itemScaleStyle = useAnimatedStyle(() => {
    const input = [
      index * itemWidth - itemWidth,
      index * itemWidth,
      index * itemWidth + itemWidth,
    ];
    const output = [0.85, 1, 0.85];
    const clamp = {
      extrapolateLeft: Extrapolate.CLAMP,
      extrapolateRight: Extrapolate.CLAMP,
    };
    return {
      transform: [{ scale: interpolate(scrollY.value, input, output, clamp) }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.item,
        itemScaleStyle,
        {
          height: itemWidth / 1.3,
          width: itemWidth,
        },
      ]}
    >
      <Image
        style={[styles.sideProject]}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <View style={[styles.overlay, styles.sideProject]} />
      <Text
        variant="smLabel"
        style={[
          styles.CompletedProject,
          { backgroundColor: "success", bottom: 90, left: 50 },
        ]}
        darkColor={colors.dark.backgroundSecondary}
        lightColor={colors.light.backgroundSecondary}
      >
        Completed
      </Text>
      <Text
        variant="h3"
        color="generalGray"
        style={[styles.OverlayText, { bottom: 60, left: 50 }]}
      >
        Snake robot
      </Text>
      <Text
        variant="smBody"
        color="generalGray"
        style={[styles.OverlayText, { bottom: 45, left: 50 }]}
      >
        Unique soft robot
      </Text>
    </Animated.View>
  );
};
