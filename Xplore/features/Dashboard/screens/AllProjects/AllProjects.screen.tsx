import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar, Text } from "../../../../components";
import styles from "./AllProjects.styles";

const ExploreProjects = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.mainContainer}>
      <Text style={styles.mainTitleText} variant="h2" color="titleText">
        Explore Projects
      </Text>

      <SearchBar
        searchText="Search for a project..."
        searchIconColor="primary"
        style={styles.searchBar}
      />
    </SafeAreaView>
  );
};

export default ExploreProjects;
