import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import { useThemeColor } from "../../../../hooks";
import { ProjectSliderSingle } from "../ProjectSliderSingle";
import styles from "./ProjectSlider.styles";
import { useFetchUserProjects } from "../../../../services/api/userProfile";
const itemWidth = deviceScreenWidth / 1.4;
interface ProjectSliderProps {
  projectIDs: string[];
}

export const ProjectSlider = (props: ProjectSliderProps) => {
  const { projectIDs } = props;
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.x;
  });
  const generalGray = useThemeColor("generalGray");

  const { data } = useFetchUserProjects(projectIDs);
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
          data={data?.documents}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }: any) => (
            <ProjectSliderSingle
              index={index}
              scrollY={scrollY}
              itemWidth={itemWidth}
              name={item.name}
              description={item.description}
              isComplete={item.isComplete}
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
