import { SafeAreaView } from "react-native";
import { useThemeColor } from "../../../../hooks";
import TopHeader from "../../../../navigation/TopHeader.component";
import { ProjectCard, SegmentedButton, View } from "../../../../components";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import styles from "./UserProjects.style";
import { StatusBar } from "expo-status-bar";

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
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const [screen, setScreen] = useState(0);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: backgroundSecondary }]}
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
