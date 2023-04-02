import { Image, TouchableOpacityProps, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text } from "../../../../components";
import { colors } from "../../../../constants";
import { useThemeColor } from "../../../../hooks";
import styles from "./ProjectSliderSingle.styles";

interface ProjectSliderSingleProps extends TouchableOpacityProps {
  index: number;
  scrollY: Animated.SharedValue<number>;
  itemWidth: number;
  name: string;
  description: string;
  percentComplete: number;
}

export const ProjectSliderSingle = (props: ProjectSliderSingleProps) => {
  const {
    index,
    scrollY,
    itemWidth,
    name,
    description,
    percentComplete,
    ...restOfProps
  } = props;
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

  const successColor = useThemeColor("success");

  return (
    <Animated.View
      style={[
        styles.item,
        itemScaleStyle,
        {
          height: itemWidth / 1.4,
          width: itemWidth,
        },
      ]}
    >
      <Image
        style={[styles.sideProject]}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <View style={[styles.overlay, styles.sideProject]} />

      <View style={styles.projectTag}>
        <Text
          variant="smLabel"
          style={[styles.completedLabel, { backgroundColor: successColor }]}
          darkColor={colors.dark.backgroundSecondary}
          lightColor={colors.light.backgroundSecondary}
          {...restOfProps}
        >
          {percentComplete === 100 ? "Completed" : "Under development"}
        </Text>
      </View>
      <View style={styles.textContent}>
        <Text variant="h3" color="white">
          {name}
        </Text>
        <Text variant="smBody" color="white">
          {description}
        </Text>
      </View>
    </Animated.View>
  );
};
