import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import { useThemeColor } from "../../../../hooks";
import { ProjectSliderSingle } from "../ProjectSliderSingle";
import styles from "./ProjectSlider.styles";

const itemWidth = deviceScreenWidth / 1.4;

export const ProjectSlider = () => {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.x;
  });
  const generalGray = useThemeColor("generalGray");

  return (
    <View style={[styles.mainContainer, { borderTopColor: generalGray }]}>
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
          renderItem={({ index }) => (
            <ProjectSliderSingle
              index={index}
              scrollY={scrollY}
              itemWidth={itemWidth}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.flatlistContentContainer,
            {
              paddingHorizontal: (deviceScreenWidth - itemWidth) / 2,
            },
          ]}
          snapToInterval={itemWidth}
          onScroll={scrollHandler}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};
