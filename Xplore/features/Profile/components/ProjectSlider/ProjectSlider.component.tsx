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
import { NavigationProp } from "@react-navigation/native";

interface ProjectSliderProps {
  projectIDs: string[];
  navigation: NavigationProp<any>;
  item: {
    name: string;
    description: string;
    imageURL?: string;
    tasks?: string[];
    conversation?: number;
    members?: string[];
    percentComplete: number;
  };
}

export const ProjectSlider = (props: ProjectSliderProps) => {
  const itemWidth = deviceScreenWidth / 1.4;
  const { projectIDs } = props;
  const { navigation } = props;
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
        <LinkButton onPress={() => navigation.navigate("UserProjects")}>
          View all
        </LinkButton>
      </View>

      <View>
        <Animated.FlatList
          data={data?.documents}
          renderItem={({ item, index }: any) => (
            <ProjectSliderSingle
              key={item}
              index={index}
              scrollY={scrollY}
              itemWidth={itemWidth}
              name={item.name}
              description={item.description}
              percentComplete={item.percentComplete}
              onPress={() =>
                navigation.navigate("ProjectDetails", { item: item })
              }
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
