import { Dimensions, ScrollView } from "react-native";
import { LinkButton, Text, View } from "../../../../components";
import { ProjectCardSmall } from "../ProjectCardSmall";
import styles from "./ExploreProjects.styles";

// interface fakeProjectsType {
//   id: number;
//   name: string;
//   image: string;
// }
//
// const fakeProjects: fakeProjectsType[] = [
//   {
//     id: 1,
//     name: "First project name",
//     image:
//       "https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka-1.jpg",
//   },
//   {
//     id: 2,
//     name: "Second project name",
//     image:
//       "https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka.jpg",
//   },
//   {
//     id: 3,
//     name: "Third project name",
//     image:
//       "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-salmon-with-sweet-soy-sauce-in-a-korean-restaurant.jpg",
//   },
//   {
//     id: 4,
//     name: "Fourth project name",
//     image:
//       "https://www.foodiesfeed.com/wp-content/uploads/2020/05/barista-preparing-coffee-cappuccino.jpg",
//   },
//   {
//     id: 5,
//     name: "Fifth project name",
//     image:
//       "https://www.foodiesfeed.com/wp-content/uploads/2020/01/sweet-macarons-scene.jpg",
//   },
// ];

export const ExploreProjects = () => {
  // const renderProjectCards = ({ name, image }: fakeProjectsType) => (
  //   <ProjectCardSmall projectName={name} imageURL={image} />
  // );

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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: Dimensions.get("window").width, marginLeft: -20 }}
      >
        <ProjectCardSmall
          projectName="Sample Project Name"
          imageURL="https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka-1.jpg"
        />
        <ProjectCardSmall
          projectName="Sample Project Name"
          imageURL="https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka-1.jpg"
        />
        <ProjectCardSmall
          projectName="Sample Project Name"
          imageURL="https://www.foodiesfeed.com/wp-content/uploads/2017/07/shakshuka-1.jpg"
        />

        {/* <FlatList
          data={fakeProjects}
          renderItem={renderProjectCards}
          keyExtractor={(item) => item.id}
        /> */}
      </ScrollView>
    </View>
  );
};

export default ExploreProjects;
