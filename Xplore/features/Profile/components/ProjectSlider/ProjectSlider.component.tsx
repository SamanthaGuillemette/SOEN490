import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import { useThemeColor } from "../../../../hooks";
import { ProjectSliderSingle } from "../ProjectSliderSingle";
import styles from "./ProjectSlider.styles";
import { useFetchUserProjects } from "../../../../services/api/projects";

interface ProjectSliderProps {
  projectIDs: string[];
}

export const ProjectSlider = (props: ProjectSliderProps) => {
  const itemWidth = deviceScreenWidth / 1.4;
  const { projectIDs } = props;
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.x;
  });
  const generalGray = useThemeColor("generalGray");

  const { data, status } = useFetchUserProjects(projectIDs);
  console.log(JSON.stringify(data, null, 4));

  return (
    <View style={[styles.mainContainer, { borderTopColor: generalGray }]}>
      <View style={styles.projectTitleContainer}>
        <Text variant="h3" color="titleText">
          PROJECTS
        </Text>
        <LinkButton>View all</LinkButton>
      </View>

      <View>
        <></>
        {status === "success" ? (
          <Animated.FlatList
            data={data?.documents}
            renderItem={({ item, index }: any) => (
              <ProjectSliderSingle
                index={index}
                scrollY={scrollY}
                itemWidth={itemWidth}
                name={item.name}
                description={item.description}
                percentComplete={item.percentComplete}
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
        ) : (
          <Text>loading...</Text>
        )}
      </View>
    </View>
  );
};
