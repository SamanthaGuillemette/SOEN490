import { FlashList } from "@shopify/flash-list";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, SearchBar, Text, View } from "../../../../components";
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

const ExploreProjects = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.mainContainer}>
      <Text style={styles.mainTitleText} variant="h2" color="titleText">
        Explore Projects
      </Text>

      <SearchBar
        searchText="Search for a project..."
        searchIconColor="primary"
        showFilterButton={true}
        style={styles.searchBar}
      />

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
