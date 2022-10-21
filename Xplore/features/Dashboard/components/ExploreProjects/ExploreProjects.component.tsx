import { LinkButton, Text, View } from "../../../../components";
import styles from "./ExploreProjects.styles";

export const ExploreProjects = () => {
  return (
    <View backgroundColor="background">
      <Text variant="h2">Explore</Text>
      <View
        backgroundColor="background"
        style={styles.exploreSubTitleContainer}
      >
        <Text variant="body">Check out popular projects</Text>
        <LinkButton backgroundColor="background">View all</LinkButton>
      </View>
    </View>
  );
};

export default ExploreProjects;
