import { FlatList } from "react-native";
import { LinkButton, Text, View } from "../../../../components";
import { ProjectCardSmall } from "../ProjectCardSmall";
import styles from "./ExploreProjects.styles";

interface FakeProjectsType {
  id: string;
  name: string;
  image: string;
}

const fakeProjects: FakeProjectsType[] = [
  {
    id: "1",
    name: "First project name",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka-1.jpg",
  },
  {
    id: "2",
    name: "Second project name",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka.jpg",
  },
  {
    id: "3",
    name: "Third project name",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-salmon-with-sweet-soy-sauce-in-a-korean-restaurant.jpg",
  },
  {
    id: "4",
    name: "Fourth project name",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2020/05/barista-preparing-coffee-cappuccino.jpg",
  },
  {
    id: "5",
    name: "Fifth project name",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2020/01/sweet-macarons-scene.jpg",
  },
];

/**
 *  ============================================================================================
 *  NOTE: I know this looks dumb but we have to do this to satisfy the <FlatList /> component
 *  Every item rendered by the <FlatList /> will automatically got 'index' injected into it
 *  ============================================================================================
 */
interface FakeProjectsTypeItem {
  item: FakeProjectsType;
  index: number;
}

// Cannot directly destruct item here because it will cause an error.
// Use the 'FakeProjectsTypeItem' interface instead.
export const ExploreProjects = () => {
  const renderProjectCards = ({ item, index }: FakeProjectsTypeItem) => {
    return (
      <ProjectCardSmall
        projectName={item.name}
        imageURL={item.image}
        index={index}
      />
    );
  };

  return (
    <View backgroundColor="background">
      <Text variant="h2" color="titleText">
        Explore
      </Text>
      <View
        backgroundColor="background"
        style={styles.exploreSubTitleContainer}
      >
        <Text variant="body">Check out popular projects</Text>
        <LinkButton backgroundColor="background">View all</LinkButton>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={fakeProjects}
        renderItem={renderProjectCards}
        keyExtractor={({ id }) => id}
        style={styles.flatListStyle}
      />
    </View>
  );
};

export default ExploreProjects;
