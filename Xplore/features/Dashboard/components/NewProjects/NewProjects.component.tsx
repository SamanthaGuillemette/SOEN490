// TODO: Need refactoring

import { NavigationProp } from "@react-navigation/native";
import { useRef } from "react";
import { Animated, ScrollView, View as RNView, StyleSheet } from "react-native";
import { LinkButton, Text, View } from "../../../../components";
import { deviceScreenWidth } from "../../../../constants";
import { ProjectCardLarge } from "../ProjectCardLarge/ProjectCardLarge.component";
import styles from "./NewProjects.styles";
import { useNewProjects } from "../../../../services/api/projects";

const indicators = ["brown", "orange", "red", "blue", "green"];

interface NewProjectsProps {
  navigation: NavigationProp<any>;
}

export const NewProjects = (props: NewProjectsProps) => {
  const { navigation } = props;
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, deviceScreenWidth - 40],
    outputRange: [0, 18],
  });

  const { data, status } = useNewProjects();

  return (
    <View style={styles.container}>
      <Text variant="h2" color="titleText">
        Just launched
      </Text>
      <View style={styles.subTitleContainer}>
        <Text variant="body">Fresh new ideas just arrived</Text>
        <LinkButton
          onPress={() => {
            navigation.navigate("AllProjects");
          }}
        >
          View all
        </LinkButton>
      </View>

      <View style={styles.projectSlideContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
            { useNativeDriver: false }
          )}
        >
          {status === "success" ? (
            data.documents.map((project) => (
              <ProjectCardLarge
                projectName={project.name}
                goal={`${project.description
                  .split(" ")
                  .slice(0, 5)
                  .join(" ")}...`}
                duration={Math.ceil(
                  (new Date(project.endDate).getTime() -
                    new Date(project.startDate).getTime()) /
                    (1000 * 3600 * 24)
                )}
                members={project.members.length}
                //the url will be replaced once project creation is complete
                imageURL="https://picsum.photos/300/200"
                key={project.name}
              />
            ))
          ) : (
            <></>
          )}
        </ScrollView>

        <RNView style={theme.indicatorContainer} pointerEvents="none">
          {indicators.map((x) => (
            <Indicator key={x} />
          ))}
          <Animated.View
            style={[
              theme.activeIndicator,
              { position: "absolute", transform: [{ translateX }] },
            ]}
          />
        </RNView>
      </View>
    </View>
  );
};

function Indicator() {
  return <RNView style={theme.indicator} />;
}

const theme = StyleSheet.create({
  indicatorContainer: {
    alignSelf: "center",
    position: "relative",
    bottom: 25,
    flexDirection: "row",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
});
