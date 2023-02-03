import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollBar } from "react-native-ui-lib";
import { SearchBar, Text, View } from "../../../../components";
import { AllProjectsCard } from "../../components";
import styles from "./AllProjects.styles";

export const fakeProjectData = [
  {
    title: "Snake Robot",
    description: "World's first unique soft robot",
    projectImage: "https://picsum.photos/200",
    tasks: 12,
    conversation: 38,
    members: 5,
    progress: 0.8,
  },
  {
    title: "UX for Seniors",
    description: "Designing for the elderly",
    projectImage: "https://picsum.photos/200",
    tasks: 10,
    conversation: 57,
    members: 8,
    progress: 0.6,
  },
  {
    title: "Visual Software Tester",
    description: "Build simple visual QA tool",
    projectImage: "https://picsum.photos/200",
    tasks: 8,
    conversation: 12,
    members: 3,
    progress: 0.4,
  },
  {
    title: "Train Ticketing System",
    description: "A new way to buy train tickets",
    projectImage: "https://picsum.photos/200",
    tasks: 12,
    conversation: 38,
    members: 5,
    progress: 0.8,
  },
  {
    title: "UX for Seniors 2",
    description: "Designing for the elderly....",
    projectImage: "https://picsum.photos/200",
    tasks: 10,
    conversation: 57,
    members: 8,
    progress: 0.6,
  },
];

const categories = [
  { title: "All" },
  { title: "Web Dev" },
  { title: "Mobile Dev" },
  { title: "Frontend" },
  { title: "Backend" },
  { title: "DSA" },
];

const ExploreProjects = () => {
  const [isCategoryListVisible, setIsCategoryListVisible] = useState(false);

  // useEffect(() => {
  //   alert(isCategoryListVisible);
  // }, [isCategoryListVisible]);

  return (
    <SafeAreaView edges={["top"]} style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.mainTitleText} variant="h2" color="titleText">
          Explore Projects
        </Text>

        <SearchBar
          searchPlaceHolder="Search for a project..."
          showFilterButton={true}
          style={styles.searchBar}
          onFilterButtonPress={setIsCategoryListVisible}
        />
      </View>

      {isCategoryListVisible && (
        <ScrollBar
          useList={true} // use FlatList
          data={categories}
          contentContainerStyle={styles.categoryListContainer}
          renderItem={({ item, index }) => (
            <View
              backgroundColor={index === 0 ? "primary" : "generalGray"}
              style={{
                marginRight: 8,
                height: 25,
                borderRadius: 20,
                paddingHorizontal: 25,
                justifyContent: "center",
              }}
            >
              <Text
                variant="label"
                color="bodyText"
                lightColor={index === 0 ? "white" : ""}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      )}

      <FlashList
        data={fakeProjectData}
        renderItem={({ item }) => <AllProjectsCard item={item} />}
        estimatedItemSize={350}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flashListContainer}
      />
    </SafeAreaView>
  );
};

export default ExploreProjects;
