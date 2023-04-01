import { NavigationProp } from "@react-navigation/native";
import { FlatList } from "react-native";
import { LinkButton, Text, View } from "../../../../components";
import { ProjectCardSmall } from "../ProjectCardSmall";
import { usePopularProjects } from "../../../../services/api/projects";
import styles from "./ExploreProjects.styles";

interface ExploreProjectsProps {
  navigation: NavigationProp<any>;
}

export const ExploreProjects = (props: ExploreProjectsProps) => {
  const { navigation } = props;

  const { data } = usePopularProjects();

  return (
    <View style={styles.exploreContainer}>
      <Text variant="h2" color="titleText">
        Explore
      </Text>
      <View style={styles.exploreSubTitleContainer}>
        <Text variant="body">Check out popular projects</Text>
        <LinkButton onPress={() => navigation.navigate("AllProjects")}>
          View all
        </LinkButton>
      </View>

      <FlatList
        data={data?.documents}
        renderItem={({ item, index }: any) => (
          <ProjectCardSmall
            key={item}
            projectName={item.name}
            index={index}
            imageURL="https://picsum.photos/300/200"
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
      />
    </View>
  );
};

export default ExploreProjects;
