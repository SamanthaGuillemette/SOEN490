import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CategoryScrollBar,
  SearchBar,
  Text,
  View,
} from "../../../../components";
import { AllProjectsCard } from "../../components";
import styles from "./AllProjects.styles";
import { useListProjectsPaginated } from "../../../../services/api/projects";
import { Models } from "appwrite";

interface ProjectData extends Models.Document {
  name: string;
  description: string;
  projectImage?: string;
  tasks?: number;
  conversations?: number;
  members?: number;
  percentComplete: number;
}

const formatProjectData = (data: ProjectData | undefined) => {
  const formattedData: ProjectData[] = [];
  data?.pages.forEach((page: { projects: ProjectData[] }) =>
    page.projects.forEach((project: ProjectData) =>
      formattedData.push(project as ProjectData)
    )
  );
  return formattedData;
};

const ExploreProjects = () => {
  const [isCategoryListVisible, setIsCategoryListVisible] = useState(false);
  const { data, fetchNextPage } = useListProjectsPaginated();

  return (
    <SafeAreaView edges={["top"]} style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.mainTitleText} variant="h2" color="titleText">
          Explore Projects
        </Text>

        <SearchBar
          searchPlaceHolder="Search for a project..."
          showFilterButton={true}
          onFilterButtonPress={setIsCategoryListVisible}
          style={styles.searchBar}
        />
      </View>

      {/* This horizontal scrollbar is hidden by default.
      When the user clicks on the filter button, "isCategoryListVisible" === true */}
      {isCategoryListVisible && (
        <CategoryScrollBar style={styles.categoryBar} categories={categories} />
      )}

      <FlashList
        data={formatProjectData(data as any)}
        renderItem={({ item }) => <AllProjectsCard item={item} />}
        estimatedItemSize={350}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flashListContainer}
        onEndReached={fetchNextPage}
      />
    </SafeAreaView>
  );
};

export default ExploreProjects;

// These fake data will be replaced by data pulled from the backend later.

const categories = [
  // TODO: we may not need the "isActive" property
  { name: "All", isActive: true },
  { name: "Web Dev", isActive: false },
  { name: "Mobile Dev", isActive: false },
  { name: "Frontend", isActive: false },
  { name: "Backend", isActive: false },
  { name: "DSA", isActive: false },
];
