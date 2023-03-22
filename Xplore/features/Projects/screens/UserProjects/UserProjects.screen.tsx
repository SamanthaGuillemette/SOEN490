import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import TopHeader from "../../../../navigation/TopHeader.component";
import {
  ProjectCard,
  SegmentedButton,
  View,
  Text,
} from "../../../../components";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import styles from "./UserProjects.style";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";
import { useUserProjects } from "../../../../services/api/projects";

interface UserProjectsProps {
  navigation: NavigationProp<any>;
}

export const fakeProjectCurrentData = [
  {
    name: "Snake Robot",
    description: "World's first unique soft robot",
    projectImage: "https://picsum.photos/200",
    tasks: 12,
    conversation: 38,
    members: 5,
    percentComplete: 80,
  },
  {
    name: "UX for Seniors",
    description: "Designing for the elderly",
    projectImage: "https://picsum.photos/200",
    tasks: 10,
    conversation: 57,
    members: 8,
    percentComplete: 60,
  },
  {
    name: "Visual Software Tester",
    description: "Build simple visual QA tool",
    projectImage: "https://picsum.photos/200",
    tasks: 8,
    conversation: 12,
    members: 3,
    percentComplete: 40,
  },
  {
    name: "Train Ticketing System",
    description: "A new way to buy train tickets",
    projectImage: "https://picsum.photos/200",
    tasks: 12,
    conversation: 38,
    members: 5,
    percentComplete: 80,
  },
  {
    name: "UX for Seniors 2",
    description: "Designing for the elderly....",
    projectImage: "https://picsum.photos/200",
    tasks: 10,
    conversation: 57,
    members: 8,
    percentComplete: 60,
  },
];

export const fakeProjectCompletedData = [
  {
    name: "Snake Robot",
    description: "World's first unique soft robot",
    projectImage: "https://picsum.photos/200",
    tasks: 12,
    conversation: 38,
    members: 5,
    percentComplete: 80,
  },
  {
    name: "UX for Seniors",
    description: "Designing for the elderly",
    projectImage: "https://picsum.photos/200",
    tasks: 10,
    conversation: 57,
    members: 8,
    percentComplete: 60,
  },
  {
    name: "Visual Software Tester",
    description: "Build simple visual QA tool",
    projectImage: "https://picsum.photos/200",
    tasks: 8,
    conversation: 12,
    members: 3,
    percentComplete: 40,
  },
  {
    name: "Train Ticketing System",
    description: "A new way to buy train tickets",
    projectImage: "https://picsum.photos/200",
    tasks: 12,
    conversation: 38,
    members: 5,
    percentComplete: 80,
  },
  {
    name: "UX for Seniors 2",
    description: "Designing for the elderly....",
    projectImage: "https://picsum.photos/200",
    tasks: 10,
    conversation: 57,
    members: 8,
    percentComplete: 60,
  },
];

const UserProjects = (props: UserProjectsProps) => {
  const background = useThemeColor("background");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const [screen, setScreen] = useState(0);
  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;
  const userprojects = useUserProjects(userId);

  // const currentProjects = userId;
  // const completedProjects = userId;

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
        {/* Testing to see if we are pulling the project ids from User Collection */}
        <Text>{userprojects[0].projects[0]}</Text>
        <SegmentedButton
          labels={["CURRENT", "COMPLETED"]}
          setIndex={setScreen}
        />
      </View>
      {screen === 0 && (
        <FlashList
          data={fakeProjectCurrentData}
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
          data={fakeProjectCompletedData}
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
