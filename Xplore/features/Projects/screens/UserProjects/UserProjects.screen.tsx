import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import TopHeader from "../../../../navigation/TopHeader.component";
import { ProjectCard, SegmentedButton, View } from "../../../../components";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import styles from "./UserProjects.style";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";
import { useProjectCardInfo } from "../../../../services/api/projects";
interface UserProjectsProps {
  navigation: NavigationProp<any>;
}

const UserProjects = (props: UserProjectsProps) => {
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const [screen, setScreen] = useState(0);
  var allProjectCard: any;

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  allProjectCard = useProjectCardInfo(userId);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: background }]}
    >
      <TopHeader screenName={"Projects"} navigation={props.navigation} />
      <View
        style={[
          styles.segmentContainer,
          { backgroundColor: backgroundSecondary },
        ]}
      >
        <SegmentedButton
          labels={["CURRENT", "COMPLETED"]}
          setIndex={setScreen}
        />
      </View>
      {screen === 0 && (
        <FlashList
          data={allProjectCard[0]}
          renderItem={({ item }) => (
            <ProjectCard navigation={props.navigation} item={item} />
          )}
          estimatedItemSize={350}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flashListContainer}
        />
      )}
      {screen === 1 && (
        <FlashList
          data={allProjectCard[1]}
          renderItem={({ item }) => (
            <ProjectCard navigation={props.navigation} item={item} />
          )}
          estimatedItemSize={350}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flashListContainer}
        />
      )}
    </SafeAreaView>
  );
};

export default UserProjects;
