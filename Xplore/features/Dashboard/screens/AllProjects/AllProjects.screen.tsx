import { FlashList } from "@shopify/flash-list";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar, Text, View } from "../../../../components";
import styles from "./AllProjects.styles";

const fakeProjectData = [
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
        renderItem={({ item }) => (
          <View
            backgroundColor="backgroundSecondary"
            style={{
              borderRadius: 8,
              marginBottom: 20,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
            key={item.title}
          >
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={{
                width: 125,
                height: 137,
                borderRadius: 8,
                marginVertical: 4,
                marginLeft: 4,
              }}
            />

            <View style={{ paddingHorizontal: 15 }}>
              <Text variant="h3" color="titleText">
                {item.title}
              </Text>
              <Text
                variant="body"
                color="bodyText"
                lineBreakMode="tail"
                numberOfLines={2}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ExploreProjects;
