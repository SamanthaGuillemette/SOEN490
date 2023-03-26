import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CategoryScrollBar,
  ProjectCard,
  SearchBar,
  Text,
  View,
} from "../../../../components";
import styles from "./AllProjects.styles";
import { useListProjectsPaginated } from "../../../../services/api/projects";
import { Models } from "appwrite";
import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";

interface ProjectData extends Models.Document {
  name: string;
  description: string;
  imageURL?: string;
  tasks: string[];
  members: string[];
  percentComplete: number;
  category: string;
  startDate: string;
  endDate: string;
  goals: string[];
}

const formatProjectData = (data: ProjectData | undefined, userID: any) => {
  const formattedData: ProjectData[] = [];
  data?.pages.forEach((page: { projects: ProjectData[] }) =>
    page.projects.forEach((project: ProjectData) =>
      formattedData.push(project as ProjectData)
    )
  );

  // For each project add key "requestJoin" and its value
  formattedData.forEach((project) => {
    let memberList = project.members;
    let foundUser = false;

    // Looping through member list and setting foundUser
    memberList.forEach(
      (memberID) => (memberID === userID ? (foundUser = true) : "") // if userID is found in list of members
    );

    project["requestJoin"] = !foundUser;
  });
  return formattedData;
};

interface ExploreProjectsProps {
  navigation: NavigationProp<any>;
}
const ExploreProjects = (props: ExploreProjectsProps) => {
  const [isCategoryListVisible, setIsCategoryListVisible] = useState(false);
  const { data, fetchNextPage } = useListProjectsPaginated();

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

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
        data={formatProjectData(data as any, userId)}
        renderItem={({ item }) => (
          <ProjectCard navigation={props.navigation} item={item} />
        )}
        estimatedItemSize={350}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flashListContainer}
        onEndReached={fetchNextPage}
      />
    </SafeAreaView>
  );
};

export default ExploreProjects;

const categories = [
  // TODO: we may not need the "isActive" property
  { name: "All", isActive: true },
  { name: "Web Dev", isActive: false },
  { name: "Mobile Dev", isActive: false },
  { name: "Frontend", isActive: false },
  { name: "Backend", isActive: false },
  { name: "DSA", isActive: false },
];
