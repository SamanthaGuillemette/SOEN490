import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import styles from "./ProjectSlider.styles";

const itemWidth = deviceScreenWidth / 1.4;

export const ProjectSlider = () => {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.x;
  });

  return (
    <View>
      <View style={styles.projectTitleContainer}>
        <Text variant="h3" color="titleText">
          PROJECTS
        </Text>
        <LinkButton>View all</LinkButton>
      </View>

      <View>
        <Animated.FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(x) => x.toString()}
          renderItem={({ index }) => <Item index={index} scrollY={scrollY} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styleTemp.list}
          snapToInterval={itemWidth}
          onScroll={scrollHandler}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

function Item({ index, scrollY }) {
  const itemScaleStyle = useAnimatedStyle(() => {
    const input = [
      index * itemWidth - itemWidth,
      index * itemWidth,
      index * itemWidth + itemWidth,
    ];
    const output = [0.8, 1, 0.8];
    const clamp = {
      extrapolateLeft: Extrapolate.CLAMP,
      extrapolateRight: Extrapolate.CLAMP,
    };
    return {
      transform: [{ scale: interpolate(scrollY.value, input, output, clamp) }],
    };
  });
  return <Animated.View style={[styleTemp.item, itemScaleStyle]} />;
}

const styleTemp = StyleSheet.create({
  flex: {
    flex: 1,
  },
  item: {
    height: itemWidth / 1.5,
    width: itemWidth,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  list: {
    alignItems: "center",
    paddingHorizontal: (deviceScreenWidth - itemWidth) / 2,
  },
});
