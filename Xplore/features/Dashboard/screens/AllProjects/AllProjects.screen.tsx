import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CategoryScrollBar,
  SearchBar,
  Text,
  View,
} from "../../../../components";
import { AllProjectsCard } from "../../components";
import styles from "./AllProjects.styles";

// These fake data will be replaced by data pulled from the backend later.
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
  { name: "All", isActive: true },
  { name: "Web Dev", isActive: false },
  { name: "Mobile Dev", isActive: false },
  { name: "Frontend", isActive: false },
  { name: "Backend", isActive: false },
  { name: "DSA", isActive: false },
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

      {/* This horizontal scrollbar is hidden by default.
      When the user clicks on the filter button, the horizontal scrollbar is shown. */}
      {isCategoryListVisible && <CategoryScrollBar categories={categories} />}

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
